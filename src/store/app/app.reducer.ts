import { AppState } from '@store/app/app.type';

export const appReady = (state: AppState) => {
  state.ready = true;
};
