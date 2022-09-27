import type { Story, Meta } from '@storybook/react';
import {Storybook} from "@new2/storybook";

const Comp = () => {
  return <Storybook />
}


const StoryMeta: Meta = {
  component: Comp,
  title: 'My Account/Hierarchy/Outstanding Balance/Card',
};

const Template: Story = (args) => <Comp {...args} />;

export default StoryMeta;
export const Positive: Story = Template.bind({});

Positive.args = {};
