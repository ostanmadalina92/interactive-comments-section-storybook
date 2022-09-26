import React from "react";

import AddComment from "./AddComment";

export default {
  component: AddComment,
  title: "Add Comment",
};

const Template = (args) => <AddComment {...args} />;

export const Default = Template.bind({});
