import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import store from './components/store/store'

//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
//import reducer  from './comtonents/reducers'

//const store = createStore(reducer, applyMiddleware(thunk));


//import './index.css';

/*
<Provider store={store}>
    <App />
</Provider>,

*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


