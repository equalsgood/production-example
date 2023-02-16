import { useTranslation } from 'react-i18next';
import { Button, VariantButton } from 'shared/components/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
    };

    return (
        <Button
            className={className}
            variant={VariantButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};
