import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextVariant } from 'shared/components/Text/Text';
import { Input } from 'shared/components/Input/Input';
import { PageLoader } from 'widgets/PageLoader';
import { Avatar } from 'shared/components/Avatar/Avatar';
import { Select } from 'shared/components/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readOnly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    variant={TextVariant.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try refreshing the page')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            <div className={cls.data}>
                { data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data.avatar} alt="profile avatar" />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                    type="number"
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar link')}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};
