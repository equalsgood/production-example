import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;
    const { t } = useTranslation();
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) ref.current?.focus();
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            { placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}

            <input
                ref={ref}
                placeholder={t('here')}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
