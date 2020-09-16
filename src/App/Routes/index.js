// import libs
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Redirect,
  Route,
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import DashboardContainer from "../Components/molecules/DashboardsContainer";
import { messaging } from "../init-fcm";

// import components
import routes, { User, Admin } from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import Layout from "../Navigators/Layout";
import NavBar from "../Navigators/NavBar";
import StartupActions from "../Stores/Startup/Actions";

import { history } from "../Stores/CreateStore";

function Routes(props) {
  const getPermisssion = () => {
    messaging
      .requestPermission()
      .then(async function () {
        getToken();
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
  };

  const getToken = () => {
    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log("token", currentToken);
        } else {
          // Show permission request.

          console.log(
            "No Instance ID token available. Request permission to generate one."
          );
          getPermisssion();

          // Show permission UI.
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  };

  useEffect(() => {
    props.checkAuthenticated();

    getToken();
    navigator.serviceWorker.addEventListener("message", (message) =>{
      props.setNotificationCount()
      console.log(message)
    }
    );

  }, []);

  return (
    <Router history={history}>
      <Layout {...props} routes={routes}>
        <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              return (
                <PrivateRoute
                  key={i}
                  {...route}
                  role={props.role}
                  props={props}
                />
              );
            }
            return <PublicRoute key={i} {...route} {...props} />;
          })}
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Layout>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  role: state.startup.role,
  isAuthenticated: state.startup.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  setNotificationCount: () => dispatch(StartupActions.setNotificationCount()),
  checkAuthenticated: () => dispatch(StartupActions.checkAuthenticated()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
