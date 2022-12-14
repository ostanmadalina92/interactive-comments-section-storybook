import React from "react";

import styled from "styled-components";

import { useState } from "react";

import AddComment from "./AddComment";
import DeleteModal from "./DeleteModal";
import Reply from "./Reply";

const CommentsSection = styled.div`
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
  flex: 0 0 2rem;
  @media (max-width: 800px) {
    display:none;
  }
`;


const IncrementorButton = styled.button`
  border: none;
  background: none;
  color: var(--color-light-grayish-blue);
  cursor: pointer;
  &:hover {
    color: var(--color-moderate-blue);
  }
`;


const IncrementorValue = styled.p`
  color: var(--color-moderate-blue);
  font-weight: 500;
`;

const CommentData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const ReplyComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Rep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: centre;
  @media (max-width: 800px) {
    width: 3rem;
    height: 1rem;
    margin-right: 1rem;
  }
`;

const ReplyImage = styled.img`
  @media (max-width: 800px) {
    margin-right: 0.5rem;
  }
`;

const ReplyButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: var(--color-moderate-blue);
  font-weight: 700;
  &:hover {
    color: var(--color-light-grayish-blue);
  }
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
  flex: 0 0 10%;
`;
const LineBreak = styled.hr`
  background-color: var(--color-light-gray);
  width: 2px;
  border: none;
`;

const You = styled.p`
  background: var(--color-moderate-blue);
  color: var(--color-white);
  padding: 0 0.3rem;
`;

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: centre;
  @media (max-width: 800px) {
    width: 3rem;
    height: 1rem;
  }
`;
const DeleteButton = styled.button`
  color: var(--color-soft-red);
  border: none;
  background: none;
  font-weight: 700;
  &:hover {
    color: var(--color-pale-red);
  }
`;

const DeleteImage = styled.img`
  padding-right: 0.5rem;
`;

const Edit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: centre;
  @media (max-width: 800px) {
    width: 3rem;
    height: 1rem;
  }
`;
const EditButton = styled.button`
  color: var(--color-moderate-blue);
  border: none;
  background: none;
  font-weight: 700;
  &:hover {
    color: var(--color-light-grayish-blue);
  }
`;

const EditImage = styled.img`
  padding-right: 0.5rem;
`;

const Update = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
`;

const UpdateTextArea = styled.textarea`
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

const UpdateButton = styled.button`
  background: var(--color-moderate-blue);
  color: var(--color-white);
  padding: 0.5rem;
  height: 3rem;
  margin: 1rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  &:hover {
    background: var(--color-light-grayish-blue);
  }
`;

const StyleReply = styled.div`
  flex-grow: 1;
`;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 800px) {
    display: none;
  }
`;

const IncrementorMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-very-light-gray);
  border-radius: 0.3rem;
  width: 8rem;
  height: 2.5rem;
  padding: 0.5rem;
  flex: 0.2 0 0rem;
  @media (min-width: 800px) {
    display: none;
  }
`;

const ReplyCommentMobile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (min-width: 800px) {
    display: none;
  }
`;

export default function Comment(comment) {
  const {
    score,
    text,
    userImage,
    userName,
    createdAt,
    replies,
    currentUserC,
    deleteComment,
  } = comment;

  const [add, setAdd] = useState(false);
  const [send, setSend] = useState(false);
  const [replyList, setReplyList] = useState(replies || []);
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(text);
  const [deleting, setDeleting] = useState(false);
  const [newScore, setNewScore] = useState(score);

  const increase = () => {
    let n = newScore + 1;
    setNewScore(n);
  };
  const decrease = () => {
    let m = newScore - 1;
    setNewScore(m);
  };

  const addReply = (comment) => {
    const newReplyList = replyList.slice();
    newReplyList.push({
      id: 5,
      content: comment,
      createdAt: "now",
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
    setReplyList(newReplyList);
  };

  const deleteReply = (reply) => {
    const newReplyList = replyList.filter(
      (eachReply) => eachReply.id !== reply.id
    );
    setReplyList(newReplyList);
    console.log(replyList);
    console.log(reply);
  };

  const editComment = () => {
    setEditing(!editing);
  };

  return (
    <CommentsSection>
      <CommentDiv>
        <Incrementor>
          <IncrementorButton onClick={increase}>+</IncrementorButton>
          <IncrementorValue>{newScore}</IncrementorValue>
          <IncrementorButton onClick={decrease}>-</IncrementorButton>
        </Incrementor>
        <CommentData>
          <UserData>
            <User>
              <UserImage src={userImage} />
              <UserName>{userName}</UserName>
              {currentUserC === userName && <You>you</You>}
              <CreatedAt>{createdAt}</CreatedAt>
            </User>
            <ReplyComment>
              {currentUserC === userName && (
                <Delete>
                  <DeleteImage src="/images/icon-delete.svg"></DeleteImage>
                  <DeleteButton onClick={() => setDeleting(true)}>
                    Delete
                  </DeleteButton>
                </Delete>
              )}
              {currentUserC === userName ? (
                <Edit>
                  <EditImage src="/images/icon-edit.svg"></EditImage>
                  <EditButton onClick={editComment}>Edit</EditButton>
                </Edit>
              ) : (
                <>
                  <ReplyImage src="/images/icon-reply.svg" />
                  <ReplyButton onClick={() => setAdd(true)}>Reply</ReplyButton>
                </>
              )}
            </ReplyComment>
          </UserData>
          {editing ? (
            <Update>
              <UpdateTextArea
                placeholder="Add a comment..."
                onChange={(e) => {
                  setEdited(e.target.value);
                }}
              />
              <UpdateButton onClick={editComment}>Update</UpdateButton>
            </Update>
          ) : (
            <CommentText>{edited}</CommentText>
          )}

          <MobileDiv>
            <IncrementorMobile>
              <IncrementorButton onClick={increase}>+</IncrementorButton>
              <IncrementorValue>{newScore}</IncrementorValue>
              <IncrementorButton onClick={decrease}>-</IncrementorButton>
            </IncrementorMobile>
            <ReplyCommentMobile>
              {currentUserC === userName && (
                <Delete>
                  <DeleteImage src="/images/icon-delete.svg"></DeleteImage>
                  <DeleteButton onClick={() => setDeleting(true)}>
                    Delete
                  </DeleteButton>
                </Delete>
              )}
              {currentUserC === userName ? (
                <Edit>
                  <EditImage src="/images/icon-edit.svg"></EditImage>
                  <EditButton onClick={editComment}>Edit</EditButton>
                </Edit>
              ) : (
                <Rep>
                  <ReplyImage src="/images/icon-reply.svg" />
                  <ReplyButton onClick={() => setAdd(true)}>Reply</ReplyButton>
                </Rep>
              )}
            </ReplyCommentMobile>
          </MobileDiv>
        </CommentData>
      </CommentDiv>

      {add && (
        <AddComment
          setSend={setSend}
          setAdd={setAdd}
          add={add}
          onSend={addReply}
        />
      )}

      {replyList.map((rep) => (
        <ReplyDiv>
          <LineBreakDiv>
            <LineBreak />
          </LineBreakDiv>
          <StyleReply>
            <Reply
              key={rep.id}
              score={rep.score}
              text={rep.content}
              userImage={rep.user.image.png}
              userName={rep.user.username}
              createdAt={rep.createdAt}
              currentUser={currentUserC}
              reply={rep}
              deleting={deleting}
              setDeleting={setDeleting}
              deleteReply={() => deleteReply(rep)}
            />
          </StyleReply>
        </ReplyDiv>
      ))}

      {deleting && (
        <DeleteModal setDeleting={setDeleting} onDelete={deleteComment} />
      )}
    </CommentsSection>
  );
}
