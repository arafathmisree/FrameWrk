
import Admin from "../../Containers/Admin" 
import Client from "../../Containers/Client";

const routes = [
  {
    path: '/admin',
    auth: true,
    roles: [
      'admin',
    ],
    exact: true,
    component: Admin
  },
  {
    path: '/admin/client',
    auth: true,
    roles: [
      'admin',
    ],
    exact: true,
    component: Client
  },
]
export default routes;