import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { Modal } from 'shared/components/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onOpenModal = useCallback(() => setIsAuthModal(true), []);
    const onCloseModal = useCallback(() => setIsAuthModal(false), []);

    return (
        <>
            <nav className={classNames(cls.navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button
                        onClick={onOpenModal}
                        variant={ButtonVariant.OUTLINE_INVERTED}
                    >
                        {t('Log in')}
                    </Button>
                </div>
            </nav>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </>
    );
};
