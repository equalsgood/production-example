import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { Input } from 'shared/components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextVariant } from 'shared/components/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const btnClickHandler = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && <Text text={t('An incorrect username or password was entered')} variant={TextVariant.ERROR} />}
            <Input
                autoFocus
                placeholder={t("Enter the user's name")}
                type="text"
                onChange={changeUsernameHandler}
                value={username}
            />
            <Input
                placeholder={t('Enter the password')}
                type="text"
                onChange={changePasswordHandler}
                value={password}
            />
            <Button
                onClick={btnClickHandler}
                variant={ButtonVariant.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>
        </form>
    );
});
