import React, {useEffect, useState} from 'react';
import PostForm from '../../components/PostForm/PostForm';
import PostFeed from '../../components/PostFeed/PostFeed';
import * as postsApi from '../../utils/postApi'
import * as likesApi from '../../utils/likesApi'

import { Grid } from "semantic-ui-react";

export default function Feed(props){  
    
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    async function handleAddPost(post){
        console.log(post, '<- postsssssss')
        const data = await postsApi.create(post);
        console.log(data, '<- this is the data')
        setPosts(posts => [data.post, ...posts])
      }
    
    async function getPosts(){
        try{
            const data = await postsApi.getAll();
            setPosts([
                ...data.posts
            ])
        }catch(err){
            setError(err.message);
            console.log(err, '<--- Error')
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    async function like(postId){
      try{
        const data = await likesApi.create(postId);
        getPosts()
      }catch(err){
        setError(err.message)
      };
    }

    async function unlike(likesId){
      try{
        const data = await likesApi.unlike(likesId);
        getPosts(false)
      }catch(err){
        setError(err.message)
      }
    }

    return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <PostForm handleAddPost={handleAddPost} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <PostFeed
                posts={posts}
                user={props.user}
                isProfile={false}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
}