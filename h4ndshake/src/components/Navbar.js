import React, { Fragment } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import Searchbar from './Searchbar';

const Navbar = () => <Fragment>
	<Menu attached='top'>
	  <Menu.Item name='Campai' />
	  <Menu.Menu position='left'>
	    <Searchbar />
	  </Menu.Menu>
	  <Menu.Item name='Startseite' />
	  <Menu.Item name='Benachrichtigungen' />
	</Menu>
	<Segment
		attached='bottom'
		padded
	>
		Developed by Osman Hernandez
	</Segment>
</Fragment>

export default Navbar;
