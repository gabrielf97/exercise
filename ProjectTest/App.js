//Importes do sistema
import React, {Component} from 'react';

//Importes criados
import Routes from './scr/router/Router';
import Reducers from './scr/reducers/Reducers'
//
import {Provider} from 'react-redux';
import {createStore} from 'redux';


let store = createStore(Reducers);

export default class App extends Component<Props> {
 
  render() {

    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
      );
  }
}

