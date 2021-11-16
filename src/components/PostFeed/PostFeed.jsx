import React from "react";
import { Card, Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";

export default function PostFeed({ posts, user, isProfile }) {
  return (
    <Card.Group>
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
          />
        );
      })}
    </Card.Group>
  );
}