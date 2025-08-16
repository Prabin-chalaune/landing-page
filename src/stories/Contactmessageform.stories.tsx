
import type { Meta, StoryObj } from '@storybook/react';
import ContactMessageForm from '../components/inputcomp/ContactMessageForm';

export default {
  title: 'Components/Input/ContactMessageForm',
  component: ContactMessageForm,
} as Meta<typeof ContactMessageForm>;

const Template: StoryObj<typeof ContactMessageForm> = (args:any) => (
  <ContactMessageForm {...args} />
);

export const Default = Template.bind({});