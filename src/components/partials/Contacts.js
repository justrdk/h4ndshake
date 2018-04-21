import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Item } from 'semantic-ui-react';
import Avatar from 'avataaars';
import StyledItem from './StyledItem';

const Contact = ({ first_name, last_name, city, avatar, name }) => <StyledItem>
  <Item.Content>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={12}>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Item.Image>
                 <Avatar
                    style={{width: '60px', height: '60px'}}
                    avatarStyle='Circle'
                    topType={avatar.top_type}
                    accessoriesType={avatar.accessories_type}
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType={avatar.clothe_type}
                    clotheColor='PastelBlue'
                    eyeType={avatar.eye_type}
                    eyebrowType={avatar.eyebrow_type}
                    mouthType={avatar.mouth_type}
                    skinColor={avatar.skin_color}
                  />
              </Item.Image>
            </Grid.Column>
            <Grid.Column width={6}>
              <Item.Header as='h4'>{first_name} {last_name}</Item.Header>
              <Item.Meta>{name}</Item.Meta>
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

Contact.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

const Contacts = ({ contacts }) => contacts.map(({ first_name, last_name, avatar, address: {city}, org: {name}}, index) => <Contact
  key={index}
  first_name={first_name}
  last_name={last_name}
  avatar={avatar}
  city={city}
  name={name}
/>);

Contacts.propTypes = {
  contacts: PropTypes.array,
};

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;
