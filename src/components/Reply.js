import React from "react";

import Comment from "./Comment";
import DeleteModal from "./DeleteModal";

export default function Reply(reply) {
 const { text, userImage, userName, createdAt, currentUser, deleteReply, deleting, setDeleting } = reply;
  return (
    <>
      <Comment
        text={text}
        userImage={userImage}
        userName={userName}
        createdAt={createdAt}
        currentUserC={currentUser}
        deleteReply={deleteReply}
      />
        {deleting && (
        <DeleteModal setDeleting={setDeleting} onDeleteR={deleteReply}/>
      )}
    </>
  );
}
