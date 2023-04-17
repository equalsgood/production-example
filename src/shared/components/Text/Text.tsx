import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextVariant {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className, text, title, variant = TextVariant.PRIMARY, align = TextAlign.LEFT,
    } = props;
    const { t } = useTranslation();

    const additionalClasses = [
        className,
        cls[variant],
        cls[align],
    ];

    return (
        <div className={classNames(cls.textWrapper, {}, additionalClasses)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
