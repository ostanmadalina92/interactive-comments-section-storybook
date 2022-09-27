import React from 'react';

import CommentsSections from './CommentsSection';

const data = require("../data.json");

export default {
    component: CommentsSections,
    title: "Comments Section",
}

const Template = (args) => <CommentsSections {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: data.comments,
  replies: [data.comments[0].replies, data.comments[1].replies],
};