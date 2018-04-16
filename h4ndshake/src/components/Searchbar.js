import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import { search } from '../reducers/searchResults/actions';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			results: this.props.results,
		};
	}

	resetSearch = () => {
		this.setState({
			searchText: '',
			results: [],
		});
	}

	handleSearchChange = (ev { value }) => {
		const { searchAll } = this.props;
		this.setState({
			searchText: value,
		});

		if (value.length < 1) {
			return this.resetSearch();
		}

		//call redux action to make call to server and fill results
	}

	render() {
		const { loading } = this.props;
		const { results, searchText } = this.state;

		return (
			<Search
				loading={loading}
				results={results}
				value={searchText}
				onSearchChange={debounce(this.handleSearchChange, 500, { leading: true })}
			 />
		)
	}
}

Searchbar.name = 'Searchbar';

Searchbar.propTypes = {
	loading: PropTypes.bool,
	results: PropTypes.array,
	searchAll: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
	loading: false,
	results: [],
};

export const mapStateToProps = ({ searchResults }) => ({
	loading: searchResults.loading,
	results: searchResults.results
});

export const mapDispatchToProps = dispatch => ({
	search: query => dispatch(search(query))
})

export default Searchbar;
