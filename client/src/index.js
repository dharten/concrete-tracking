import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux";
import {getJobsList} from "./redux/Job";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// Get initial Jobs data and load into Redux
store.dispatch(getJobsList());
