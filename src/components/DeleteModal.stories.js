import React from "react";

import DeleteModal from "./DeleteModal";

export default {
  component: DeleteModal,
  title: "DeleteModal",
};

const Template = (args) => <DeleteModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
