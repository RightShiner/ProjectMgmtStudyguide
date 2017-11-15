import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './redux/containers/AppContainer.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './redux/reducers/root_reducer.js';

const logger = createLogger();
const store = createStore(rootReducer,{},applyMiddleware(thunk,logger));

ReactDOM.render(<Provider store={store}>
                  <AppContainer />
                </Provider>, document.getElementById('root'));

 
