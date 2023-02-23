import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/themeLight.svg';
import DarkIcon from 'shared/assets/icons/themeDark.svg';
import { Button, ButtonVariant } from 'shared/components/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            className={className}
            onClick={toggleTheme}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
