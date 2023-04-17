import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/components/AppLink/AppLink';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;
    const { text, Icon, path } = item;

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={path}
            icon={<Icon />}
            collapsed={collapsed}
        >
            {t(text)}
        </AppLink>
    );
};
