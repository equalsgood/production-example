import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextVariant } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
    variant: TextVariant.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title Title Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text Text Text Text Text Text Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title Title Title',
    text: 'Text Text Text Text Text Text Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
