import cls from './ThemeSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import React from "react";
import {Theme, useTheme} from "shared/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/themeLight.svg"
import DarkIcon from "shared/assets/icons/themeDark.svg"
import {Button, VariantButton} from "shared/components/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant={VariantButton.CLEAR} className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
