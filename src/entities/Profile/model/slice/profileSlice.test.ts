import { ProfileSchema, updateProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Artem',
    lastname: 'Babak',
    age: 22,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Dnipro',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { first: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: '123' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
            first: '123123',
        })))
            .toEqual({
                form: {
                    first: '123123',
                },
            });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                data,
                form: data,
            });
    });
});
