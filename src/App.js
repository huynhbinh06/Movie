import React, {Component} from 'react';
import MainNavigation from './MainNavigation';
import {Provider} from 'react-redux';
import UserReducer from './redux/userReducer';
import {createStore} from 'redux';

const stores = createStore(UserReducer, false);

export default class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <MainNavigation />
      </Provider>
    );
  }
}
