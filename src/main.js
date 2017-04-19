import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import  {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/index'
import App from './containers/App'

const middleware = routerMiddleware(history)
const store = createStore(
    reducers,
    applyMiddleware(middleware)
)
var history = createHistory(store)

const node = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="*" component={App}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    node
)
