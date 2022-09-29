import React from "react";

import styled from "styled-components";

import { useState } from 'react';

import AddComment from './AddComment';

const CommentsSection =  styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
  background-color: var(--color-white);
  width: 100%;
`;

const Incrementor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-very-light-gray);
  border-radius: 0.3rem;
  width: 4rem;
  height: 4.5rem;
  padding: 0.5rem;
`;

const IncrementorButton = styled.button`
  border: none;
  background: none;
  color: var(--color-light-grayish-blue);
  cursor: pointer;
`;

const IncrementorValue = styled.p`
  color: var(--color-moderate-blue);
  font-weight: 500;
`;

const CommentData = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10rem;
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const UserImage = styled.img`
  width: 2rem;
`;

const UserName = styled.p`
  color: var(--color-dark-blue);
  font-weight: 700;
`;

const CreatedAt = styled.p`
  color: var(--color-grayish-blue);
  font-weight: 500;
`;

const Reply = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
`;

const ReplyImage = styled.img`
`;

const ReplyButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: var(--color-moderate-blue);
  font-weight: 700;
`;

const CommentText = styled.p`
  padding: 1rem 0;
  color: var(--color-grayish-blue);
  font-weight: 500;
`;

const ReplyDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineBreakDiv = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
`;
const LineBreak = styled.hr`
  background-color: var(--color-light-gray);
  width: 2px;
  border: none;
`;

export default function Comment({ text, userImage, userName, createdAt }) {
  
  const [add, setAdd] =  useState(false);
  const [newComment, setNewComment] = useState("");
  const [send, setSend] =  useState(false);

  return (
    <CommentsSection>
      <CommentDiv>
        <Incrementor>
          <IncrementorButton>+</IncrementorButton>
          <IncrementorValue>12</IncrementorValue>
          <IncrementorButton>-</IncrementorButton>
        </Incrementor>
        <CommentData>
          <UserData>
            <User>
              <UserImage src={userImage} />
              <UserName>{userName}</UserName>
              <CreatedAt>{createdAt}</CreatedAt>
            </User>
            <Reply>
              <ReplyImage src="/images/icon-reply.svg" />
              <ReplyButton onClick={() => setAdd(true)}>Reply</ReplyButton>
            </Reply>
          </UserData>
          <CommentText>{text}</CommentText>
        </CommentData>
      </CommentDiv>
      {newComment !== "" && send === true && (
        <ReplyDiv>
          <LineBreakDiv>
            <LineBreak />
          </LineBreakDiv>
          <CommentDiv>
            <Incrementor>
              <IncrementorButton>+</IncrementorButton>
              <IncrementorValue>12</IncrementorValue>
              <IncrementorButton>-</IncrementorButton>
            </Incrementor>
            <CommentData>
              <UserData>
                <User>
                  <UserImage src="/images/avatars/image-juliusomo.png" />
                  <UserName>juliusomo</UserName>
                  <CreatedAt>now</CreatedAt>
                </User>
                <Reply>
                  <ReplyImage src="/images/icon-reply.svg" />
                  <ReplyButton onClick={() => setAdd(true)}>Reply</ReplyButton>
                </Reply>
              </UserData>
              <CommentText>{newComment}</CommentText>
            </CommentData>
          </CommentDiv>
        </ReplyDiv>
      )}
      {add === true && (
        <AddComment
          setNewComment={setNewComment}
          setSend={setSend}
          setAdd={setAdd}
          add={add}
        />
      )}
    </CommentsSection>
  );
}
