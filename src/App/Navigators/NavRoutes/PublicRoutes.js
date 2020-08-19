import Home from "../../Containers/Home"
import Login from "../../Containers/Login"
import About from "../../Containers/About"
import signUpComp from "../../Containers/SignUp"

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
]

export default routes
