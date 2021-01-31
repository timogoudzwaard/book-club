// Button.stories.tsx
import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './button';
import '../../../.tailwind/tailwind.css';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

export const Default = () => <Button>Button text</Button>;

export const Purple = () => <Button color="purple">Button text</Button>;

export const Borderless = () => (
  <Button variant="borderless">Button text</Button>
);
