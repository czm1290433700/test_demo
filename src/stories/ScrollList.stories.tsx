import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScrollList } from "../components/ScrollList";

export default {
  title: "Example/ScrollList",
  component: ScrollList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ScrollList>;

const Template: ComponentStory<typeof ScrollList> = (args) => (
  <ScrollList {...args} />
);

export const List = Template.bind({});
List.args = {
  data: [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
  ],
  height: 80,
  pageSize: 3,
};
