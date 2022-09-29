import React from 'react';

import Reply from './Reply';

export default {
    component: Reply,
    title: "Reply",
}

const Template =  args => <Reply {...args} />

export const Default = Template.bind({});
Default.args = {
  text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
  userImage: "/images/avatars/image-ramsesmiron.png",
  userName: "ramsesmiron",
  createdAt: "1 week ago",
};