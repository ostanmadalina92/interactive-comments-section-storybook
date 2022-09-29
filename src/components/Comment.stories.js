import React from "react";

import Comment from "./Comment";

export default {
  component: Comment,
  title: "Comment",
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  userImage: "/images/avatars/image-amyrobson.png",
  userName: "amyrobson",
  createdAt: "1 month ago",
};
