import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import Searchbar from './Searchbar';
import Logo from './Logo';

const StyledMenu = styled(Menu)`
  padding: 10px;
`;

const Navbar = () => <StyledMenu size='small'
  borderless
  attached='top'
  className='top-menu'>
  <Menu.Menu position='left'>
    <Menu.Item header><Logo /></Menu.Item>
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
