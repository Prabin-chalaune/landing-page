import type { Meta, StoryObj } from '@storybook/react';
import {
  faServer,
  faDesktop,
  faAddressCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../components/inputcomp/Card';

export default {
  title: 'Components/Input/Card',
  component: Card,
  args: {
    icon: 'faServer',
  },
  argTypes: {
    width: {
      type: 'number',
      defaultValue: 200,
      description:
        'A width of parent element. this property is used for resizing the element.',
    },
    icon: {
      options: ['faServer', 'faDesktop', 'faAddressCard', 'faHome'],
      mapping: {
        faServer,
        faDesktop,
        faAddressCard,
        faHome,
      },
      description: 'Fortawesome icons. a few icons are provided as examples.',
    },
  },
} as Meta<typeof Card>;

const Template: StoryObj<typeof Card> = ({ width, ...args }: any) => (
  <div style={{ width }}>
    <Card {...args} />
  </div>
);

export const Empty = Template.bind({});

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description',
  href: 'https://google.com/',
};