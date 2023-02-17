import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>
                {t('Something went wrong')}
            </p>
            <Button onClick={reloadPage}>
                {t('Refresh the page')}
            </Button>
        </div>
    );
};
