import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';
import StyledItem from './StyledItem';
import orgLogo from '../Logos/org.png';

const Org = ({ name, type, city }) => <StyledItem>
  <Item.Content>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={12}>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Item.Image>
                <img src={orgLogo} width={48} height={48} alt="org logo"/>
              </Item.Image>
            </Grid.Column>
            <Grid.Column width={6}>
              <Item.Header as='h4'>{name}</Item.Header>
              <Item.Meta>{type}</Item.Meta>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={4}>
          <Item.Description>{city}</Item.Description>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Item.Content>
</StyledItem>;

Org.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

const Orgs = ({ orgs }) => orgs.map(({ name, type, city}, index) => <Org key={index} name={name} type={type} city={city} />);

Orgs.propTypes = {
  orgs: PropTypes.array,
};

Orgs.defaultProps = {
  orgs: [],
};

export default Orgs;
