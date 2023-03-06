import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/components/Button/Button';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
    };

    return (
        <Button
            className={className}
            variant={ButtonVariant.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Lang' : 'Language')}
        </Button>
    );
});
