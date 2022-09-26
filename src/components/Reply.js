import React from "react";

import styled from "styled-components";

import Comment from "./Comment";

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

export default function Reply({ text, userImage, userName, createdAt }) {
  return (
    <ReplyDiv>
      <LineBreakDiv>
        <LineBreak />
      </LineBreakDiv>
      <Comment
        text={text}
        userImage={userImage}
        userName={userName}
        createdAt={createdAt}
      />
    </ReplyDiv>
  );
}
