import React from "react";

import Comment from "./Comment";
import Reply from "./Reply";

export default function CommentList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <>
        <Comment 
        text={comment.content} 
        userImage={comment.user.image.png}
        userName={comment.user.username}
        createdAt={comment.createdAt}
        />
        {comment.replies.map((rep) => (
             <Reply
              text={rep.content}
              userImage={rep.user.image.png}
              userName={rep.user.username}
              createdAt={rep.createdAt}
            />)
          )}
        </>
      ))}
    </>
  );
}
