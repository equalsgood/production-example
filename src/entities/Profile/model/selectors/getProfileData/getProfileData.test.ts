import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Artem',
            lastname: 'Babak',
            age: 22,
            currency: Currency.UAH,
            country: Country.Ukraine,
            city: 'Dnipro',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
