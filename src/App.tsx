/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from '@components/header/Menu';
import { LoadingBar } from '@components/loadings';
import { ModalProvider } from '@components/modals';
import { NotifyProvider } from '@components/notifications';

import {
  PageHome,
  PageContext,
  PageForm,
  PageStyledComponents,
  PageSlotPattern,
  PageRive,
  PageRTK,
  PageIntersectionObserver,
  PageTailwind,
} from '@pages/index';

import { selectAppReady } from '@store/app/app.selector';
import { store } from '@store/store';
import { useAppSelector } from '@store/store.hook';

import { GlobalStyle } from '@styles/globalStyle';
import { ThemeProvider } from '@styles/themes';
import '@styles/tailwind.css';

/**
 * App Routes
 */

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path='context' element={<PageContext />} />
        <Route path='form' element={<PageForm />} />
        <Route path='styled-components' element={<PageStyledComponents />} />
        <Route path='slot-pattern' element={<PageSlotPattern />} />
        <Route path='rive' element={<PageRive />} />
        <Route path='rtk' element={<PageRTK />} />
        <Route
          path='intersection-observer'
          element={<PageIntersectionObserver />}
        />
        <Route path='tailwind' element={<PageTailwind />} />
      </Routes>
    </BrowserRouter>
  );
};

/**
 * App Base
 */
const AppBase = (): JSX.Element => {
  const isAppReady = useAppSelector(selectAppReady);
  //const appIsReady = useAppSelector(({ app }) => app.isReady);

  return (
    <NotifyProvider>
      <ModalProvider>
        <main>
          {!isAppReady && <LoadingBar />}
          <AppRoutes />
        </main>
      </ModalProvider>
    </NotifyProvider>
  );
};

/**
 * App Root
 */
const AppRoot = (): JSX.Element => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppBase />
    </ThemeProvider>
  );
};

/**
 * App
 */
const App = (): JSX.Element => {
  return (
    <ReduxProvider store={store}>
      <AppRoot />
    </ReduxProvider>
  );
};

export { App };
