import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { Modal } from 'shared/components/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => setIsAuthModal((prev) => !prev), []);

    return (
        <>
            <nav className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        onClick={onToggleModal}
                        variant={ButtonVariant.OUTLINE_INVERTED}
                    >
                        {t('Log in')}
                    </Button>
                </div>
            </nav>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aliquid culpa cupiditate deserunt dicta,
                dignissimos dolore esse facilis ipsa ipsam itaque laboriosam
                magnam natus nisi odio placeat quisquam quo repellat unde
                voluptatibus. Accusamus beatae cupiditate delectus deleniti
                dicta dignissimos eligendi error et facere facilis inventore
                iure laboriosam necessitatibus nemo nesciunt nihil non omnis
                porro, provident quaerat quidem quisquam saepe soluta ut voluptate?
            </Modal>
        </>
    );
};
