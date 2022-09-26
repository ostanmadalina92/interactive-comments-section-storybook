import React from "react";

import ReplyList from "./ReplyList";

const data = require("../data.json");

export default {
  component: ReplyList,
  title: "ReplyList",
};

const Template = (args) => <ReplyList {...args} />;

export const Replies = Template.bind({});
Replies.args = {
  replies: [data.comments[0].replies, data.comments[1].replies],
};
