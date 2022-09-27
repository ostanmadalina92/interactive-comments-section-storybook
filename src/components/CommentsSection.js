import React from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

export default function CommentsSection ({comments}) {
    return (
        <>
        <CommentList comments={comments} />
        <AddComment />
        </>
    )
}