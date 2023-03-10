import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/components/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            lazy
            className={classNames(className || '', {}, [])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<PageLoader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
