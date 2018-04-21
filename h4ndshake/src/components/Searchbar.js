import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Item } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { search, resetResults } from '../reducers/searchResults/actions';
import { Contacts, Orgs, ContactGroups } from './partials';

const DEBOUNCE_DELAY = 300;

const StyledSearchContent = styled.div`
  min-width: 560px;
  position: absolute;
  background-color: #ffffff;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 1;
  top: 68px;
  left: 122px;
`;

const StyledHeader = styled.h2`
  font-size: 18px;
  padding-left: 15px;
  line-height: 24px;
`;

const StyledItemGroup = styled(Item.Group)`
  padding-left: 15px;
`;

const StyledInput = styled(Input)`
  width: 280px;
  height: 32px;
  top: 8px;
`;

class Searchbar extends Component {

  getSearchSuggesstions = (value) => {
    const { search } = this.props;
    search(value);
  }

  fetchResults = value => this.getSearchSuggesstions(value);

  updateCollection = debounce(value =>
    this.fetchResults(value), DEBOUNCE_DELAY);

  updateInputValue = inputValue => this.updateCollection(inputValue);

  handleSearchChange = (ev, { value }) => {
    const { reset } = this.props;

    if (value.length < 1) {
      return reset();
    }
    this.updateInputValue(value);
  }

  render() {
    const { loading, results } = this.props;
    const { orgs = [], contacts = [], contactGroups = [] } = results;

    return (
      <Fragment>
      <StyledInput loading={loading} icon='search' placeholder='Search here...' onChange={this.handleSearchChange} />
      <StyledSearchContent>
        <StyledHeader>Orgs</StyledHeader>
        <StyledItemGroup>
          <Orgs orgs={orgs} />
        </StyledItemGroup>
        <StyledHeader>Contacts</StyledHeader>
        <StyledItemGroup>
          <Contacts contacts={contacts} />
        </StyledItemGroup>
        <StyledHeader>Groups</StyledHeader>
        <StyledItemGroup>
          <ContactGroups contactGroups={contactGroups} />
        </StyledItemGroup>
      </StyledSearchContent>
      </Fragment>
    )
  }
}

Searchbar.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.object,
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
