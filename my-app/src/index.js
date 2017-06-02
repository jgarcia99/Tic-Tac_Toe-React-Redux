import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { initialState, gameReducer } from './reducers/gameReducer';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(gameReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
