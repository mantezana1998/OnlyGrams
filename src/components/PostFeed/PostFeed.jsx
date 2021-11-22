import React from "react";
import { Card, Segment, Image } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostFeed({ 
  posts, 
  numPhotosCol,
  user, 
  isProfile,
  like,
  unlike
})
{
  return (
    <Card.Group itemsPerRow={numPhotosCol}>
      <Segment>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      {posts.map((post) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            user={user}
            isProfile={isProfile}
            like={like}
            unlike={unlike}
          />
        );
      })}
    </Card.Group>
  );
}