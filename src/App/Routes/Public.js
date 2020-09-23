import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoutes = ({ component: Component, rest, ...props }) => {
  console.log('public routes ', props);
  //return <Route {...rest} render={props => {
    return <Suspense fallback={<div>Loading...</div>}>
          { !props.isAuthenticated
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: `${props.role}/dashboard`,
                state: { from: props.location },
            }}/>}
    </Suspense>
  //}}/>
}

export default PublicRoutes
