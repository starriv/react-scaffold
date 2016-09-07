import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import  {Provider} from 'react-redux'
import reducer from './reducers/index'
import App from './components/app/app'


const store = createStore(reducer)
const node = document.getElementById('app')
render(
    <Provider store={store}>
        <App store={store} name="React"/>
    </Provider>,
    node
)