import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    m = 'size_m',
    l = 'size_l',
    xl = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant,
        square,
        size = ButtonSize.m,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [className, cls[variant], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
