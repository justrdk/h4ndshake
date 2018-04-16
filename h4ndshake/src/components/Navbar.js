import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import Searchbar from './Searchbar';

const Navbar = () => <Menu pointing>
  <Menu.Item name='Campai' />
  <Menu.Menu position='left'>
    <Searchbar />
  </Menu.Menu>
  <Menu.Item name='Startseite' />
  <Menu.Item name='Benachrichtigungen' />
</Menu>

export default Navbar;
