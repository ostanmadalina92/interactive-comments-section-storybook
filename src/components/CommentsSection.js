import React, { useState } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

import styled from "styled-components";

const Container = styled.div`
  width: 80%;
`;

export default function CommentsSection({ comments, currentUser }) {
  const [add, setAdd] = useState(false);
  const [send, setSend] = useState(false);

  const [commentList, setCommentList] = useState(comments);

  const addComment = (comment) => {
    const newCommentList = commentList.slice();
    newCommentList.push({
      id: 5,
      content: comment,
      createdAt: "now",
      score: 12,
      user: currentUser,
      replies: [],
    });
    setCommentList(newCommentList);
  };
  const deleteComment = (comment) => {
    const newCommentList = commentList.filter(
      (eachComment) => eachComment.id !== comment.id
    );
    setCommentList(newCommentList);
  };

  return (
    <>
      <Container>
        <CommentList
          comments={commentList}
          currentUser={currentUser}
          deleteComment={deleteComment}
        />
        <AddComment
          setSend={setSend}
          setAdd={setAdd}
          add={add}
          onSend={addComment}
        />
      </Container>
    </>
  );
}
