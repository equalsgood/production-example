import React from 'react';
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/components/AppLink/AppLink";
import {classNames} from "shared/lib/classNames/classNames";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
            </div>
        </nav>
    );
};
