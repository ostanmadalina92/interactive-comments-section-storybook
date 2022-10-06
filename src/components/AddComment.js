import React from "react";

import styled from "styled-components";

import { useState } from "react";

const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--color-white);
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UserLogo = styled.img`
  width: 2rem;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 80%;
  height: 80px;
  border-radius: 0.4rem;
  border-color: var(--color-light-gray);
  padding: 10px 20px;
  font-family: "Rubik";
  font-weight: 500;
  font-size: 16px;
  color: var(--color-grayish-blue);
`;

const SendCommentButton = styled.button`
  border-radius: 0.3rem;
  border: none;
  background-color: var(--color-moderate-blue);
  width: 15%;
  height: 40px;
  color: var(--color-white);
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: var(--color-light-grayish-blue);
  }
`;

export default function AddComment({
  onSend,
  setSend,
  setAdd,
  add,
}) {
  const [comment, setComment] = useState("");

  const onSendComment = (com) => {
    if (typeof onSend === "function") {
      onSend(com);
    }
    setComment(" ");
  };

  return (
    <>
      <AddCommentContainer>
        <UserLogo src="/images/avatars/image-juliusomo.png" />
        <TextArea
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></TextArea>
        <SendCommentButton
          onClick={() => {
            setSend(true);
            setAdd(!add);
            onSendComment(comment);
          }}
        >
          Send
        </SendCommentButton>
      </AddCommentContainer>
    </>
  );
}
