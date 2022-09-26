import React from "react";

import styled from "styled-components";

const CommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--color-white);
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

export default function Comment({ text, userImage, userName, createdAt }) {
  return (
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
            <ReplyButton>Reply</ReplyButton>
          </Reply>
        </UserData>
        <CommentText>{text}</CommentText>
      </CommentData>
    </CommentDiv>
  );
}
