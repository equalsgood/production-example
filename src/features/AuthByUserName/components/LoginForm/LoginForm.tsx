import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { Input } from 'shared/components/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextVariant } from 'shared/components/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const changeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const changePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const btnClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') onSuccess();
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <form className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error
                    && <Text text={t('An incorrect username or password was entered')} variant={TextVariant.ERROR} />}
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
