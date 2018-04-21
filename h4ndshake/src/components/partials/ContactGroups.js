import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';

const ContactGroup = ({ name, city }) => <Item>
  <Item.Content>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={12}>
          <Item.Header as='h4'>{name}</Item.Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Item.Description>{city}</Item.Description>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Item.Content>
</Item>

ContactGroup.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const ContactGroups = ({ contactGroups }) => contactGroups.map(({ name, address: {city}}, index) =>
  <ContactGroup key={index} name={name} city={city} />);

ContactGroups.propTypes = {
	contactGroups: PropTypes.array,
};

ContactGroups.defaultProps = {
	contactGroups: [],
};

export default ContactGroups;
