import Home from "../../Containers/Home"
import Login from "../../Containers/Login"
import About from "../../Containers/About"

const routes = [
  {
    path: '/',
    auth: false,
    roles: [],
    exact: true,
    component: Home
  },
  {
    path: '/about',
    auth: false,
    roles: [],
    exact: true,
    component: About
  },
  {
    path: '/login',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
]

export default routes