import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';

const Org = ({ name, type, city }) => <Item>
  <Item.Content>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={12}>
          <Item.Header as='h4'>{name}</Item.Header>
          <Item.Meta>{type}</Item.Meta>
        </Grid.Column>
        <Grid.Column width={4}>
          <Item.Description>{city}</Item.Description>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Item.Content>
</Item>

Org.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const Orgs = ({ orgs }) => orgs.map(({ name, type, city}, index) => <Org key={index} name={name} type={type} city={city} />) 

export default Orgs;
