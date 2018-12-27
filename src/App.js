import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Store from './stores/Store'
import routes from './routes'
import './styles/App.css'

// const title = "Template All The Things";
const store = new Store()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
