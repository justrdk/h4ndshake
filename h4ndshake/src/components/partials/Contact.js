import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import Avatar from 'avataaars'

const Contact = ({ first_name, last_name, city, avatar, org: { name }}) => <Item>
	<Item.Content>
		<Item.Header>
			 <Avatar
          style={{width: '50px', height: '50px'}}
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
		</Item.Header>
		<Item.Header as='h3'>Contact</Item.Header>
		<Item.Header as='h4'>{first_name} {last_name}</Item.Header>
		<Item.Description><strong>City: </strong>{city}</Item.Description>
		<Item.Description><strong>Name: </strong>{name}</Item.Description>
	</Item.Content>
</Item>;

Contact.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  org: PropTypes.object.isRequired,
};

export default Contact;
