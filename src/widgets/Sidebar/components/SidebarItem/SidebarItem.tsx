import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/components/AppLink/AppLink';
import React from 'react';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}

export const SidebarItem = (props: SidebarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;
    const { text, Icon, path } = item;

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
