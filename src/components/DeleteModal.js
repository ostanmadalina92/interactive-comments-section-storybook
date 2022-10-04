import React from "react";
import styled from "styled-components";

export default function DeleteModal({
  setDeleting,
  deleteComment,
  setDeleteModalState,
}) {
  const cancelDelete = () => {
    setDeleting(false);
    setDeleteModalState(false);
  };

  const deleteBtnClick = () => {
    deleteComment();
    setDeleteModalState(false);
  };
  const DeleteConfirmationWrapper = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(60, 60, 60, 0.3); ;
  `;

  const DeleteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 90%;
    background: var(--color-white);
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    padding: 30px
  `;
  const Title = styled.div`
    color: var(--color-dark-blue);
    font-weight: 900;
    font-size: 1.2rem;
  `;
  const ConfirmationMessage = styled.div`
    line-height: 1.5;
    color: var(--color-grayish-blue);
  `;

  const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const CancelBtn = styled.button`
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 600;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    background: var(--color-grayish-blue);
  `;

  const DeleteBtn = styled.button`
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 600;
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
    background: var(--color-soft-red);
  `;
  return (
    <DeleteConfirmationWrapper>
      <DeleteContainer>
        <Title>Delete Comment</Title>
        <ConfirmationMessage>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </ConfirmationMessage>
        <BtnContainer>
          <CancelBtn onClick={cancelDelete}>No, cancel</CancelBtn>
          <DeleteBtn onClick={deleteBtnClick}>Yes, delete</DeleteBtn>
        </BtnContainer>
      </DeleteContainer>
    </DeleteConfirmationWrapper>
  );
}
