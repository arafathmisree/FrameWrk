import User from "../../Containers/User";
import Profile from "../../Containers/Profile";
import Charts from "../../Containers/Charts";
import Tables from "../../Containers/Tables";

const routes = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    auth: true,
    roles: ["user"],
    exact: true,
    component: User,
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
    path: '/user/charts',
    title: 'Charts',
    auth: true,
    roles: ["user"],
    exact: true,
    component: Charts,
  },
  {
    path: '/user/tables',
    title: 'Tables',
    auth: true,
    roles: ["user"],
    exact: true,
    component: Tables,
  },
  {
    path: '/user/logout',
    title: 'Logout',
    auth: true,
    roles: ["user"],
    exact: true,
    component: Profile,
  },
];
export default routes;
