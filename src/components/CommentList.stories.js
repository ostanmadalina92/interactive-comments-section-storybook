import React from 'react';

import CommentList from './CommentList';

const data = require("../data.json");

export default {
    component: CommentList,
    title: 'CommentList',
};

const Template = args => <CommentList {...args} />

export const Comments = Template.bind({});
Comments.args = {
    comments: data.comments,
}