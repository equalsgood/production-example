import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from '../slice/counterSlice';

describe('counterSlice', () => {
    test('counter increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('counter decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('should work with empty state (test initial state)', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
