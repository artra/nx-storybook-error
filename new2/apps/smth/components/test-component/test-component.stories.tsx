import type { Story, Meta } from '@storybook/react';

const Comp = () => {
  return <>test</>
}

const StoryMeta: Meta = {
  component: Comp,
  title: 'My Account/Hierarchy/Outstanding Balance/Card',
};

const Template: Story = (args) => <Comp {...args} />;

export default StoryMeta;
export const Positive: Story = Template.bind({});

Positive.args = {};
