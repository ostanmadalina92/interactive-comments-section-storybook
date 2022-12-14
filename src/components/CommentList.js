import React from "react";

import Comment from "./Comment";

export default function CommentList({ comments, currentUser, deleteComment }) {
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
