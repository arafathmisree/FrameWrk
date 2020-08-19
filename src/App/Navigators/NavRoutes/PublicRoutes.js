import Login from "../../Containers/Login"
import signUpComp from "../../Containers/SignUp"
import NotFound from "../../Containers/NotFound"

const routes = [
  {
    path: '/',
    title: 'Home',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/login',
    title: 'Login',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/SignUp',
    title: 'SignUp',
    auth: false,
    roles: [],
    exact: true,
    component: signUpComp
  },
  {
    path: '/404',
    auth: false,
    roles: [],
    exact: true,
    component: NotFound
  },
]

export default routes
