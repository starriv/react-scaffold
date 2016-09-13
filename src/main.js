import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import  {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import reducer from './reducers/index';
import Hello from './components/hello/hello';


const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

const node = document.getElementById('app');
render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Hello}>
            </Route>
        </Router>
    </Provider>,
    node
);
