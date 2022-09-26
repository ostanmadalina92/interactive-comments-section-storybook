import React from "react";

import Comment from "./Comment";

export default {
  component: Comment,
  title: "Comment",
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
