import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

// reducers that aren't required is for optimization purposes
export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // async reducers
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
}

// For reducer's lazy loading
export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key:StateSchemaKey, reducer: Reducer) => void;
    remove: (key:StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}
