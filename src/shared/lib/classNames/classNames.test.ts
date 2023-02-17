import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        expect(
            classNames(
                'someClass',
                {},
                ['cls1', 'cls2'],
            ),
        )
            .toBe('someClass cls1 cls2');
    });

    test('with extra mods', () => {
        expect(
            classNames(
                'someClass',
                { disabled: true, hidden: true },
                ['cls1', 'cls2'],
            ),
        )
            .toBe('someClass cls1 cls2 disabled hidden');
    });

    test('with extra false mods', () => {
        expect(
            classNames(
                'someClass',
                { disabled: true, hidden: false },
                ['cls1', 'cls2'],
            ),
        )
            .toBe('someClass cls1 cls2 disabled');
    });

    test('with extra undefined mods', () => {
        expect(
            classNames(
                'someClass',
                { disabled: true, hidden: false },
                ['cls1', 'cls2'],
            ),
        )
            .toBe('someClass cls1 cls2 disabled');
    });
});
