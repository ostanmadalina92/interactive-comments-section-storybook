import React from "react";

import CommentList from "./CommentList";

const data = require("../data.json");

export default {
  component: CommentList,
  title: "Comment List",
};

const Template = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: data.comments,
};
