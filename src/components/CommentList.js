import React from "react";

import Comment from "./Comment";

export default function CommentList({ comments }) {

  return (
    <>
      {comments.map((comment) => (
        <>
          <Comment
            key={comment.id}
            text={comment.content}
            userImage={comment.user.image.png}
            userName={comment.user.username}
            createdAt={comment.createdAt}
            replies={comment.replies}
          />
        </>
      ))}
    </>
  );
}
