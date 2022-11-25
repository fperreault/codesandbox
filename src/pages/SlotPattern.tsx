/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { H1, H3, Button } from '@components/generics';

import { Wrapper } from '@styles/tools';
import { Grid, Cell } from '@styles/tools';

interface BasicLayoutProps {
  left: JSX.Element | JSX.Element[];
  center: JSX.Element | JSX.Element[];
  right: JSX.Element | JSX.Element[];
}

/**
 * GRID BASIC LAYOUT
 * - Grid layout for horizontal view
 * @param props GridBasicLayoutProps Props
 * @return JSX.Element
 */
const BasicLayout = (props: BasicLayoutProps): JSX.Element => {
  const { left, center, right } = props;

  return (
    <Grid columns='100px 1fr 100px'>
      <Cell>{left}</Cell>
      <Cell>{center}</Cell>
      <Cell>{right}</Cell>
    </Grid>
  );
};

/**
 * Page Styled Components
 */
const PageSlotPattern = (): JSX.Element => {
  return (
    <Wrapper>
      <H1>Slots Pattern</H1>

      <section>
        <H3>Grid layout avec slots (basic)</H3>
        <BasicLayout left={<>left</>} center={<>center</>} right={<>right</>} />
      </section>

      <section>
        <H3>Grid layout avec slots (standard)</H3>
        <BasicLayout
          left={<H3>left</H3>}
          center={
            <>
              <H3>center</H3>
              <Button.SmallPrimary label='Button' />
            </>
          }
          right={[
            <H3 key='title'>right</H3>,
            <Button.SmallPrimary label='Button' key='button1' />,
            <Button.SmallOutlinePrimary label='Button' key='button2' />,
          ]}
        />
      </section>
    </Wrapper>
  );
};

/**
 * Exports
 */
export { PageSlotPattern };
