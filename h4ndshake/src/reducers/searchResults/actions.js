import * as constants from './constants';
import { searchAll } from '../../services/searchService';

export const searchRequest = () => ({
  type: constants.SEARCH_REQUEST,
});

export const searchRequestFail = () => ({
  type: constants.SEARCH_REQUEST_FAIL,
});

export const searchRequestSuccess = payload => ({
  type: constants.SEARCH_REQUEST_SUCCESS,
  payload,
});

export const resetResults = () => ({
  type: constants.SEARCH_RESET,
})

export const search = query => ((dispatch) => {
  dispatch(searchRequest())
  return searchAll(query)
    .then(response => response.json())
    .then((response) => {
      if (response.error) {
        return dispatch(searchRequestFail(response.error.message))
      }
      dispatch(searchRequestSuccess(response));
    });
});
