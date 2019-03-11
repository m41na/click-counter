import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store';

const store = configureStore({distance: {value : 100}});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);