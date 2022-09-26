import React from 'react';

import CommentsSections from './CommentsSection';

export default {
    component: CommentsSections,
    title: "Comments Section",
}

const Template = (args) => <CommentsSections {...args} />;

export const Default = Template.bind({});