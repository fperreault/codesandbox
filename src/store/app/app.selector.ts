import { AppState } from '@store/app/app.type';
import { StoreState } from '@store/store.type';

export const selectApp = ({ app }: StoreState): AppState => app;

export const selectAppReady = ({ app }: StoreState): boolean => app.ready;
