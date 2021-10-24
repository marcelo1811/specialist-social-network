import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from 'components/Navbar';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoggedIn.args = {
  user: true,
};

export const NotLogged = Template.bind({});
NotLogged.args = {
  user: false,
};
