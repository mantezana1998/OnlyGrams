import React, {useState} from 'react';
import PostForm from '../../components/PostForm/PostForm';
import PostFeed from '../../components/PostFeed/PostFeed';
import * as postsApi from '../../utils/postApi'

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
    
    return (
        <>
        <PostForm handleAddPost={handleAddPost} />
        <PostFeed />
        </>
    )
}