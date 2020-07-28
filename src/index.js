import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter} from "react-router-dom";
import store from './components/store/store'

import './index.css'

ReactDOM.render(
    <Provider store={store}>
         <HashRouter>
             <App />
         </HashRouter>
    </Provider>,
    document.getElementById('root')
);


