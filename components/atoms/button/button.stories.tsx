// Button.stories.tsx
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './button';
import '../../../.tailwind/tailwind.css';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};
