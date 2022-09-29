import React from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
`;

export default function CommentsSection({ comments }) {
  return (
    <>
      <Container>
        <CommentList comments={comments} />
        <AddComment />
      </Container>
    </>
  );
}
