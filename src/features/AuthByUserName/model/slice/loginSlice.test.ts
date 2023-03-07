import { loginActions, LoginSchema } from 'features/AuthByUserName';
import { loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('12345')))
            .toStrictEqual({ username: '12345' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345')))
            .toStrictEqual({ password: '12345' });
    });
});
