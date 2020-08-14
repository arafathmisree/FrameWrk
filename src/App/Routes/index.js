// import libs
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

// import components
import routes, { User , Admin } from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'
import NavBar from '../Navigators/NavBar'
import { HistoryWrapper } from '../Navigators/HostoryWrapper'

const history = createBrowserHistory()
HistoryWrapper.init(history)

const Routes = (props) => (
  <Router hisotry={history}>
      <NavBar {...props}/>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute  key={i} {...route}  role={props.role}/>
          }
          return <PublicRoute key={i} {...route} />
        })}
      </Switch>
  </Router>
)

const mapStateToProps = (state) => ({
     role : state.startup.role
});

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps,mapDispatchToProps)(Routes)