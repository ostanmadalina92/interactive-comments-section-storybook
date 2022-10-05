import React from "react";

import Comment from "./Comment";

export default function Reply(reply) {
  const {
    score,
    text,
    userImage,
    userName,
    createdAt,
    currentUser,
    deleteReply,
  } = reply;
  return (
    <>
      <Comment
        score={score}
        text={text}
        userImage={userImage}
        userName={userName}
        createdAt={createdAt}
        currentUserC={currentUser}
        deleteComment={deleteReply}
      />
    </>
  );
}
