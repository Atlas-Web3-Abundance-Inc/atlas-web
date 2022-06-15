import React from 'react';

import { Success } from './Success';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Success',
  component: Success,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Success {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Success',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Success',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Success',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Success',
};
