import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/reduxStore';


let replayLoader = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
            store={store}
            dispatch={store.dispatch.bind(store)}
            state={state}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

replayLoader(store.getState());

store.subscribe(() => {
    let state = store.getState();
    replayLoader(state)
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
