import React, { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { Modal } from 'shared/components/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const openModalHandler = useCallback(() => setIsAuthModal(true), []);
    const closeModalHandler = useCallback(() => setIsAuthModal(false), []);
    useEffect(() => {
        if (authData) closeModalHandler();
    }, [authData, closeModalHandler]);

    const logoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <>
            { authData
                && (
                    <nav className={classNames(cls.navbar, {}, [className])}>
                        <div className={cls.links}>
                            <Button
                                onClick={logoutHandler}
                                variant={ButtonVariant.OUTLINE_INVERTED}
                            >
                                {t('Log out')}
                            </Button>
                        </div>
                    </nav>
                )}
            { !authData
                && (
                    <>
                        <nav className={classNames(cls.navbar, {}, [className])}>
                            <div className={cls.links}>
                                <Button
                                    onClick={openModalHandler}
                                    variant={ButtonVariant.OUTLINE_INVERTED}
                                >
                                    {t('Log in')}
                                </Button>
                            </div>
                        </nav>
                        <LoginModal isOpen={isAuthModal} onClose={closeModalHandler} />
                    </>
                )}
        </>
    );
};
