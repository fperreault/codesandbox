import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { StoreState, StoreDispatch } from '@store/store.type';

export const useAppDispatch = () => useDispatch<StoreDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
