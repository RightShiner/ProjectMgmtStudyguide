import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './redux/containers/AppContainer.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './redux/reducers/root_reducer.js';

import {setKaFilter} from './redux/actions/get_steps.js';

const logger = createLogger();
const store = createStore(rootReducer,{},applyMiddleware(thunk,logger));
store.dispatch(setKaFilter('test'))

ReactDOM.render(<Provider store={store}>
                  <AppContainer />
                </Provider>, document.getElementById('root'));

 
