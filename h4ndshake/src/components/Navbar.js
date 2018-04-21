import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import { NavbarLogo } from './Logos';

const StyledMenu = styled(Menu)`
  padding: 10px;
  height: 50px;
`;

const Navbar = () => <StyledMenu
  borderless
  attached='top'
  className='top-menu'>
  <Menu.Menu position='left'>
    <Menu.Item header><NavbarLogo /></Menu.Item>
    <Searchbar />
  </Menu.Menu>
  <Menu.Menu position='left'>
    <Menu.Item name='Startseite' />
    <Menu.Item name='14 Benachrichtigungen' />
    <Dropdown item text='Alexander Adams'>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu.Menu>
</StyledMenu>

export default Navbar;
