// First step is this:
import React from 'react';
import ReactDOM from 'react-dom';
// that's how we load the css from src ;)
import './index.css';
import App from './components/App';


// your first React Command
ReactDOM.render(
    <App></App>,
    document.querySelector("#root")
);


