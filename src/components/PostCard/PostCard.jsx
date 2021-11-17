import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function PostCard({ 
  post, 
  isProfile, 
  user, 
  like, 
  unlike 
  }) {

  const likeIndex = post.likes.findIndex(
    (eachLike) => eachLike.username === user.username
  );

  console.log(post, '<-----------')

  const likeColor = likeIndex > -1 ? "green" : "grey";

  const clickHandler =
    likeIndex > -1
      ? () => unlike(post.likes[likeIndex]._id)
      : () => like(post._id);

  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user?.username}`}>
              <Image
                size="large"
                avatar
                src={
                  "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{post.caption}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon name={"heart"} size="large" color={likeColor} onClick={clickHandler}/>
        {post.likes.length} Likes
      </Card.Content>
    </Card>
  );
}

export default PostCard;
