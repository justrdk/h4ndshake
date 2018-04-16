import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import { search, resetResults } from '../reducers/searchResults/actions';
import SearchResults from './SearchResults';

const debounceDelay = 500;

class Searchbar extends Component {
  state = {
    searchText: '',
  }

  resetSearch = () => {
    const { reset } = this.props;
    this.setState({ searchText: '' }, () => reset());
  }

  getSearchSuggesstions = (value) => {
    const { search } = this.props;
    search(value);
  }

  fetchResults = value => this.getSearchSuggesstions(value);

  updateCollection = debounce(value =>
    this.fetchResults(value), debounceDelay);

  updateInputValue = inputValue => this.updateCollection(inputValue);

  handleSearchChange = (ev, { value }) => {
    if (value.length < 1) {
      return this.resetSearch();
    }
    this.setState({ searchText: value }, () => this.updateInputValue(value));
  }

  render() {
    const { loading, results } = this.props;
    const { searchText } = this.state;

    return (
      <Fragment>
      <Search
        loading={loading}
        value={searchText}
        results={results}
        onSearchChange={this.handleSearchChange}
        resultRenderer={SearchResults}
        {...this.props}
       />
      </Fragment>
    )
  }
}

Searchbar.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
  search: PropTypes.func.isRequired,
};

export const mapStateToProps = ({ searchResults }) => ({
  loading: searchResults.loading,
  results: searchResults.results,
});

export const mapDispatchToProps = dispatch => ({
  search: query => dispatch(search(query)),
  reset: () => dispatch(resetResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
