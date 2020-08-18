import Home from "../../Containers/Home"
import Login from "../../Containers/Login"
import About from "../../Containers/About"
import signUpComp from "../../Containers/SignUp"

const routes = [
  {
    path: '/',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/login',
    auth: false,
    roles: [],
    exact: true,
    component: Login
  },
  {
    path: '/SignUp',
    auth: false,
    roles: [],
    exact: true,
    component: signUpComp
  },
]

export default routes