import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/components/Text/Text';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');

    const readOnly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readOnly ? (
                <Button
                    onClick={onEdit}
                >
                    {t('Edit')}
                </Button>
            ) : (
                <div className={cls.editButtons}>
                    <Button
                        onClick={onCancelEdit}
                        variant={ButtonVariant.OUTLINE_RED}
                    >
                        {t('Cancel')}
                    </Button>
                    <Button
                        onClick={onSaveEdit}
                    >
                        {t('Save')}
                    </Button>
                </div>
            )}
        </div>
    );
};
