import { combineReducers } from 'redux';
import searchResults from './searchResults/searchResults';

const appReducer = combineReducers({
	searchResults,
});

export default appReducer;
