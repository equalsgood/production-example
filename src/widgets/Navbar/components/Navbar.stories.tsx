import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import { Loading } from '../../../features/AuthByUserName/components/LoginForm/LoginForm.stories';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    },
})];

export const Auth = Template.bind({});
Auth.args = {};

Auth.decorators = [StoreDecorator({
    user: {
        authData: {},
    },
}), ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [StoreDecorator({
    user: {
        authData: undefined,
    },
}), ThemeDecorator(Theme.DARK)];
