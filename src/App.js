import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Navbar from './components/Navbar';
import reducers from './reducers'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  }
}

export default App;
