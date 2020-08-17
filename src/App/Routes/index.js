// import libs
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch ,withRouter} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'


// import components
import routes, { User, Admin } from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import NavBar from "../Navigators/NavBar";


import { history } from "../Stores/CreateStore";


const Routes = (props) => (
  
 
    <Switch>

      {routes.map((route, i) => {
        if (route.auth) {
          return (
            <PrivateRoute key={i} {...route} role={props.role}  {...props}>
            <NavBar {...props} />
            </PrivateRoute>);
        }
        return <PublicRoute key={i} {...route} />;
      })}
    </Switch>
   
);

const mapStateToProps = (state) => ({
  role: state.startup.role,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Routes));
