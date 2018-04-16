import 'whatwg-fetch';

export const searchAll = query => fetch(`http://localhost:3001/all?search=${query}`, {
	method: 'GET',
	headers: {
    Accept: 'application/json',
  },
});
