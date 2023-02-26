import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button/Button';
import { Input } from 'shared/components/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t("Enter the user's name")} type="text" />
            <Input placeholder={t('Enter the password')} type="text" />
            <Button className={cls.loginBtn}>
                {t('Log in')}
            </Button>
        </form>
    );
};
