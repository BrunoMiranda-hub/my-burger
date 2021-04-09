import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom"
import { createStore,applyMiddleware } from "redux"
import reducer from "../src/Store/reducer"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(reducer,applyMiddleware(thunk))
//console.log(store.getState())

const app = (

    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter >    
    
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
