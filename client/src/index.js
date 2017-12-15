import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";

// import {Provider} from "react-redux";
// import store from "./redux";

ReactDOM.render(
  // <Provider>
    <Router>
      <App />
    </Router>,
  // </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
