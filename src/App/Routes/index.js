// import libs
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch ,withRouter, Redirect, Route} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import DashboardContainer from "../Components/molecules/DashboardsContainer";

// import components
import routes, { User, Admin } from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import Layout from "../Navigators/Layout"
import NavBar from "../Navigators/NavBar";
import StartupActions from "../Stores/Startup/Actions";

import { history } from "../Stores/CreateStore";

function Routes (props) {

  useEffect(() => {
    props.checkAuthenticated()
  });

return (
    <Router history={history} >
      <Layout {...props} routes={routes}>
        <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              return <PrivateRoute key={i} {...route} role={props.role} props={props} />
            }
            return <PublicRoute key={i} {...route} {...props}/>;
          })}
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Layout>
    </Router>);

  };

const mapStateToProps = (state) => ({
  role: state.startup.role,
  isAuthenticated: state.startup.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthenticated : () => dispatch(StartupActions.checkAuthenticated())
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Routes));
