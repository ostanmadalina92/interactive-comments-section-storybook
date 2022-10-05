import React from "react";

import Comment from "./Comment";

const data = require("../data.json");

const comments = data.comments;

export default function CommentList({ currentUser, deleteComment }) {

  return (
    <>
      {comments.map((comment) => (
        <>
          <Comment
            key={comment.id}
            score={comment.score}
            text={comment.content}
            userImage={comment.user.image.png}
            userName={comment.user.username}
            createdAt={comment.createdAt}
            replies={comment.replies}
            comment={comment}
            currentUserC={currentUser.username}
            deleteComment={() => deleteComment(comment)}
          />
        </>
      ))}
    </>
  );
}
