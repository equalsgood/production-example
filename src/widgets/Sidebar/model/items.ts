import React from 'react';
import { RoutePaths } from 'app/providers/AppRouter/config/routesConfig';
import AboutIcon from 'shared/assets/icons/aboutPage.svg';
import MainIcon from 'shared/assets/icons/mainPage.svg';
import ProfileIcon from 'shared/assets/icons/profilePage.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Profile',
    },
];
