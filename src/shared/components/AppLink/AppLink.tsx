import { Link, LinkProps } from 'react-router-dom';
import React, { FC, ReactElement, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    icon?: ReactNode;
    collapsed?: boolean;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        icon,
        collapsed,
    } = props;
    return (
        <Link to={to} className={classNames(cls['app-link'], {}, [cls[theme]])}>
            {icon && icon}
            {!collapsed && children}
        </Link>
    );
};
