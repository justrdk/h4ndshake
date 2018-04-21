import * as constants from './constants';

const initialState = {
  results: {},
  loading: false,
};

const searchResults = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case constants.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.SEARCH_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        results: {},
      };
    case constants.SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        results: payload
      }
    case constants.SEARCH_RESET:
      return {
        ...state,
        loading: false,
        results: {},
      };
    default:
      return state;
  }
};

export default searchResults;
