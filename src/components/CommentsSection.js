import React, {useState} from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
`;

export default function CommentsSection({ comments, currentUser }) {

    const [add, setAdd] = useState(false);
    // const [newComment, setNewComment] = useState("");
    const [send, setSend] = useState(false);

    const [commentList, setCommentList] = useState(comments);

    const addComment = (comment) => {
      const newCommentList = commentList.slice();
      newCommentList.push({
        id: 1,
        content: comment,
        createdAt: Date.now(),
        score: 12,
        user: {
          image: {
            png: "/images/avatars/image-juliusomo.png",
            webp: "/images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
        replies: [],
      });
      setCommentList(newCommentList);
    };


  return (
    <>
      <Container>
        <CommentList comments={commentList} currentUser={currentUser}/>
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
