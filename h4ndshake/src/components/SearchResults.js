import React from 'react';
import { Contact, Org, ContactGroup } from './partials';

const renderComponent = (props) => {
	switch (props.dataSetType) {
		case 'contact':
			return <Contact first_name={props.first_name} last_name={props.last_name} city={props.city} org={props.org} avatar={props.avatar} />
		case 'org':
			return <Org name={props.name} type={props.type} city={props.city} />
		case 'contactgroup':
			return <ContactGroup name={props.name} city={props.city} />
	}
}

const SearchResults = props => renderComponent(props)

export default SearchResults;
