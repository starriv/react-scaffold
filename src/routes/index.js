import { Home } from '../views/Home'
import { NoMatch } from '../views/Common/NoMatch'

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'NoFound',
    component: NoMatch,
  },
]

export default routes
