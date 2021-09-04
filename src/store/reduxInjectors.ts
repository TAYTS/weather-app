import { useInjectReducer as useReducer, useInjectSaga as useSaga } from 'redux-injectors';
import { InjectReducerParams, InjectSagaParams } from 'store/types';

export const useInjectReducer = ({ key, reducer }: InjectReducerParams): void => useReducer({ key, reducer });

export const useInjectSaga = ({ key, saga, mode }: InjectSagaParams): void => useSaga({ key, saga, mode });
