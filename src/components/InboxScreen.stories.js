import React from "react";

import { PureInboxScreen } from "./InboxScreen";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};
const component = {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something is wrong",
};

export default component;
