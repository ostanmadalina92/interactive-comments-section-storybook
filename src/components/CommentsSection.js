import React, {useState} from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
`;

export default function CommentsSection({ comments }) {

    const [add, setAdd] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [send, setSend] = useState(false);

  return (
    <>
      <Container>
        <CommentList comments={comments} />
        <AddComment
          newComment={newComment}
          setNewComment={setNewComment}
          setSend={setSend}
          setAdd={setAdd}
          add={add}
        />
      </Container>
    </>
  );
}
