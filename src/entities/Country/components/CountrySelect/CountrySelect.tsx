import { Select } from 'shared/components/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.China, content: Country.China },
    { value: Country.US, content: Country.US },
    { value: Country.England, content: Country.England },
    { value: Country.France, content: Country.France },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        value,
        onChange,
        readOnly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Select country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
