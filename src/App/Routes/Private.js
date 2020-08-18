import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
const history = createBrowserHistory()

const PrivateRoute = ({ component: Component, role, ...rest }) => {

  if (role) {
    if (rest.roles.indexOf(role) > -1) {
      return <Route {...rest} render={props => (<Component {...props}/>)}/>
    } else {
      return <Route {...rest} render={props => (<Redirect to={{
          pathname: history.location.pathname,
        }}/>
      )}/>
    }
  } else {
    return <Route {...rest} render={props => (<Redirect to={{
        pathname: '/login',
      }}/>
    )}/>
  }
}

export default PrivateRoute