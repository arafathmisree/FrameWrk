// import libs
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch ,withRouter} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import DashboardContainer from "../Components/molecules/DashboardsContainer";

// import components
import routes, { User, Admin } from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import NavBar from "../Navigators/NavBar";
import StartupActions from "../Stores/Startup/Actions";

import { history } from "../Stores/CreateStore";

function Routes (props) {

  useEffect(() => {
    props.checkAuthenticated()
  });

return (
    <div>
      {/*<NavBar {...props} />*/}
      <DashboardContainer navbarItems={routes} role={props.role} />
          <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              return <PrivateRoute key={i} {...route} role={props.role} props={props} />
            }
            return <PublicRoute key={i} {...route} {...props}/>;
          })}
        </Switch>

    </div>);

  };

const mapStateToProps = (state) => ({
  role: state.startup.role,
  isAuthenticated: state.startup.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthenticated : () => dispatch(StartupActions.checkAuthenticated())
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Routes));
