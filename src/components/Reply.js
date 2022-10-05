import React from "react";

import Comment from "./Comment";

export default function Reply(reply) {
 const { text, userImage, userName, createdAt, currentUser } = reply;
  return (
      <Comment
        text={text}
        userImage={userImage}
        userName={userName}
        createdAt={createdAt}
        currentUserC={currentUser}
      />
  );
}
