import User from "../../Containers/User"
import Profile from "../../Containers/Profile";

const routes = [
  {
    path: '/user/dashboard',
    title: 'Home',
    auth: true,
    roles: [
      'user',
    ],
    exact: true,
    component: User
  },
  {
    path: '/user/profile',
    title: 'Profile',
    auth: true,
    roles: [
      'user',
    ],
    exact: true,
    component: Profile
  },
  {
    path: '/user/logout',
    title: 'Logout',
    auth: true,
    roles: [
      'user',
    ],
    exact: true,
    component: Profile
  },
]
export default routes;
