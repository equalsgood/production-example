import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/components/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    element?: HTMLElement;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        element,
        lazy,
    } = props;

    // for closing animation
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // preventing modal's closing after click on modal content
    const contentClickHandler = (e: React.MouseEvent) => e.stopPropagation();

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) window.addEventListener('keydown', onKeyDown);

        // clearing async before component's unmount for preventing bugs
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={element}>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content)}
                        onClick={contentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
