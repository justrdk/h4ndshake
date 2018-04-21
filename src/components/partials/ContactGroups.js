import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';
import StyledItem from './StyledItem';
import groupLogo from '../Logos/group.png';

const ContactGroup = ({ name, city }) => <StyledItem>
  <Item.Content>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={12}>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Item.Image>
              <img src={groupLogo} width={48} height={48} alt="group logo"/>
              </Item.Image>
            </Grid.Column>
            <Grid.Column width={6}>
              <Item.Header as='h4'>{name}</Item.Header>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={4}>
          <Item.Description>{city}</Item.Description>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Item.Content>
</StyledItem>

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
