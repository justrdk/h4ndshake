import React from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Searchbar from './Searchbar';

const StyledMenu = styled(Menu)`
	padding: 10px;
`;

const Navbar = () => <Container>
	<StyledMenu size='big'
		borderless
		attached='top'
		className='top-menu'>
	  <Menu.Item header>Campai</Menu.Item>
	  <Menu.Menu position='left'>
	    <Searchbar />
	  </Menu.Menu>
	  <Menu.Item name='Startseite' />
	  <Menu.Item name='Benachrichtigungen' />
	</StyledMenu>
	<Segment
		attached='bottom'
		padded
	>
		Developed by Osman Hernandez using Semantic-UI for UI framework.
	</Segment>
</Container>

export default Navbar;
