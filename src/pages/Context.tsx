/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useContext, createContext, FC } from 'react';

import { Button, H1, H3 } from '@components/generics';
import { useModal } from '@components/modals';
import { useNotify } from '@components/notifications';

import { selectAppReady } from '@store/app/app.selector';
import { useAppSelector } from '@store/store.hook';

import { Wrapper } from '@styles/tools';

/**
 * Basic Provider Interface
 */
interface BasicProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Basic Context Interface
 */
interface BasicContextProps {
  data: number;
  dataFromStore: boolean;
  handler: () => void;
}

/**
 * Basic Context
 */
const BasicContext = createContext<BasicContextProps | null>(null);
BasicContext.displayName = 'BasicContext';

/**
 * Basic Provider Component
 */
const BasicProvider: FC<BasicProviderProps> = ({
  children,
}: BasicProviderProps): JSX.Element => {
  const dataFromStore = useAppSelector(selectAppReady);
  const [data, setData] = useState(0);
  const setDataHandler = () => setData(Math.round(Math.random() * 300));

  return (
    <BasicContext.Provider
      value={{ data, dataFromStore, handler: setDataHandler }}
    >
      <H3>Basic Provider / Consumer</H3>
      <BasicConsumer />
      <BasicConsumerUseContext />
      {children}
    </BasicContext.Provider>
  );
};

/**
 * Basic Consumer
 */
const BasicConsumer = (): JSX.Element => {
  return (
    <BasicContext.Consumer>
      {(context) => (
        <>
          <p>
            Basic Consumer ({context?.data}):{' '}
            {context?.dataFromStore ? 'app ready' : 'app not ready'}
          </p>
          <Button.SmallPrimary
            label='Basic Consumer (handler)'
            onClick={context?.handler}
          />
        </>
      )}
    </BasicContext.Consumer>
  );
};

/**
 * Basic Consumer Use Context
 */
const BasicConsumerUseContext = (): JSX.Element => {
  const context = useContext(BasicContext);
  return (
    <>
      <p>
        Basic UseContext ({context?.data}):{' '}
        {context?.dataFromStore ? 'app ready' : 'app not ready'}
      </p>
      <Button.SmallPrimary
        label='Basic UseContext (handler)'
        onClick={context?.handler}
      />
    </>
  );
};

/**
 * Basic Consumer with Hook Protection
 */
const BasicConsumerWithHookProtection = (): JSX.Element => {
  const basicConsumer = useBasicConsumer();
  return (
    <>
      <p>
        Basic Consumer Protected ({basicConsumer.data}):{' '}
        {basicConsumer.dataFromStore ? 'app ready' : 'app not ready'}
      </p>
      <Button.SmallPrimary
        label='Basic Consumer Protected (handler)'
        onClick={basicConsumer.handler}
      />
    </>
  );
};

/**
 * Basic Consumer Hook Protection
 */
const useBasicConsumer = (): BasicContextProps => {
  const context = useContext(BasicContext);

  if (!context) {
    throw new Error('No Provider found when calling useBasicConsumer.');
  }

  return context;
};

/**
 * Page Providers
 */
const PageContext = (): JSX.Element => {
  const modal = useModal();
  const notify = useNotify();

  return (
    <Wrapper>
      <H1>ContextAPI</H1>

      <section>
        <BasicProvider>
          <BasicConsumerWithHookProtection />
        </BasicProvider>
        {/*<BasicConsumerUseContext />*/}
        {/*<BasicConsumerWithHookProtection />*/}
      </section>

      <section>
        <H3>Modal ({!modal.content ? 'fermée' : 'ouverte'})</H3>
        <Button.SmallPrimary
          label='Open Modal #1'
          onClick={() => modal.open(<H1 tabIndex={0}>Lorem ipsum</H1>)}
        />
        <Button.SmallPrimary
          label='Open Modal #2'
          onClick={() =>
            modal.open(
              <h1 tabIndex={0}>
                Nombre de notifications: {notify.items.length}
              </h1>,
            )
          }
        />
      </section>

      <section>
        <H3>Notification ({`${notify.items.length} affichée(s)`})</H3>
        <Button.SmallPrimary
          label='Remove all'
          onClick={() => notify.remove()}
          disabled={notify.items.length === 0}
        />
        <Button.OutlinePrimary
          label='Warning'
          onClick={() => notify.warn('Warning msg')}
        />
        <Button.OutlinePrimary
          label='Infos'
          onClick={() => notify.info('Infos msg')}
        />
        <Button.OutlinePrimary
          label='Log'
          onClick={() => notify.log('Log msg')}
        />
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageContext };
