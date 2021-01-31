import { Meta } from '@storybook/react';
import React from 'react';
import Card from './card';
import '/.tailwind/tailwind.css';

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta;

export const Default = () => <Card>Test</Card>;

export const DefaultPadding = () => (
  <Card defaultPadding>Card with default Padding</Card>
);

export const Link = () => (
  <Card href="#" defaultPadding>
    Card as a link with default padding
  </Card>
);
