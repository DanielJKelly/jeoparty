// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// DEPENDENCY
const routes = require('./routes');

const history = createBrowserHistory();

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    render(<Router history={history}>{routes}</Router>, document.getElementById('app'));

    /*
        // v0.13.x
        Router.run(routes, Router.HistoryLocation, (Handler) => {
          React.render(<Handler/>, document.getElementById('app'));
        });
    */
  };
}
