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
    (eachLike) => eachLike.username === user?.username
  );

  const likeColor = likeIndex > -1 ? "green" : "grey";

  const clickHandler =
    likeIndex > -1
      ? () => unlike(post.likes[likeIndex]._id)
      : () => like(post._id);
      console.log(user.username, '<-----Username from postcard')
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
                  post.user?.photoUrl
                    ? post.user?.photoUrl
                    : "https://i.imgur.com/fX4C4QR.jpg"
                }
              />
              {post.user?.username}
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
