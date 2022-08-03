import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {register} from "./deps";
import AuthenticationService from "./services/AuthenticationService";
import MenuService from "./services/MenuService";
import {setupStore} from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
(_ => {
    register('AuthenticationService', AuthenticationService())
    register('MenuService', MenuService())
})()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
