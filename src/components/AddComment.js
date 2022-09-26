import React from "react";

import styled from 'styled-components';

const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  background-color: var(--color-white);
  padding: 1rem;
  margin-top: 1rem;
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
`;

export default function AddComment() {
  return (
    <>
      <AddCommentContainer>
          <img src="" />
          <TextArea
            placeholder="Add a comment..."
          ></TextArea>
          <SendCommentButton>Send</SendCommentButton>
      </AddCommentContainer>
    </>
  );
}
