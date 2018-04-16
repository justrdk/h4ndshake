import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

const Org = ({ name, type, city }) => <Item>
  <Item.Content>
    <Item.Header as='h3'>Organization</Item.Header>
    <Item.Header as='h4'>{name}</Item.Header>
    <Item.Description><strong>City: </strong>{city}</Item.Description>
    <Item.Description><strong>Type: </strong>{type}</Item.Description>
  </Item.Content>
</Item>

Org.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Org;
