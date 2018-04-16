import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const ContactGroup = ({ name, city }) => <Item>
	<Item.Content>
		<Item.Header as='h3'>Contact Group</Item.Header>
		<Item.Header as='h4'>{name}</Item.Header>
		<Item.Header as='h4'>{city}</Item.Header>
	</Item.Content>
</Item>

ContactGroup.propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
};

export default ContactGroup;
