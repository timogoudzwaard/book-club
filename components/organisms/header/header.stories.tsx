import { Meta } from '@storybook/react';
import React from 'react';
import Header from './header';
import '/.tailwind/tailwind.css';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

export const Default = () => <Header />;
