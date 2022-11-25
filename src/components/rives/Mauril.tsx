/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import { useRive } from 'rive-react';

import logo from '@assets/riv/mauril.riv';

const Mauril = (): JSX.Element => {
  const { RiveComponent, rive } = useRive(
    {
      src: logo,
      animations: 'intro',
      autoplay: true,
    },
    {
      useDevicePixelRatio: true,
      fitCanvasToArtboardHeight: true,
    },
  );

  return <RiveComponent onClick={() => rive?.play('blink')} />;
};

export { Mauril };
