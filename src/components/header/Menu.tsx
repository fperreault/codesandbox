/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, ButtonTypes } from '@components/generics';

import { useDarkMode, ThemeMode } from '@styles/themes';
import { FlexDisplay } from '@styles/tools/flex/FlexDisplay';

/**
 * Menu items links
 */
const menuItems = [
  { label: 'Context', url: '/context' },
  { label: 'Form', url: '/form' },
  { label: 'Styled-Components', url: '/styled-components' },
  { label: 'Slot pattern', url: '/slot-pattern' },
  { label: 'Rive', url: '/rive' },
  { label: 'RTK', url: '/rtk' },
  { label: 'Intersection Observer / Scroll', url: '/intersection-observer' },
  { label: 'Tailwind', url: '/tailwind' },
];

/**
 * Menu
 */
const Menu = () => {
  const { theme, setThemeToggle } = useDarkMode();
  const navigate = useNavigate();

  const goto = (e: MouseEvent, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <HeaderWrapper as='header'>
      <MenuWrapper as='ul'>
        {menuItems.map((key, value) => {
          return (
            <li key={value}>
              <Button.SmallPrimary
                label={key.label}
                as={ButtonTypes.LINK}
                href={key.url}
                onClick={(e) => goto(e, key.url)}
                selected={window.location.pathname === key.url}
                disabled={window.location.pathname === key.url}
              />
            </li>
          );
        })}
        <li>
          <Button.SmallOutlinePrimary
            label='Dark Mode'
            onClick={setThemeToggle}
            selected={theme === ThemeMode.DARKMODE}
          />
        </li>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

/**
 * Styles
 */
const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  background: #e9e9e9;
  padding: 20px 20px;
  margin: 0 0 20px 0;
  overflow: hidden;
  z-index: 9999999;
`;
const MenuWrapper = styled(FlexDisplay.Component)`
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 5px 5px;
  }
`;

/**
 * Exports
 */
export { Menu };
