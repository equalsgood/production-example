import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

export enum TextVariant {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
}

export const Text = (props: TextProps) => {
    const {
        className, text, title, variant = TextVariant.PRIMARY,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.textWrapper, {}, [className, cls[variant]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
