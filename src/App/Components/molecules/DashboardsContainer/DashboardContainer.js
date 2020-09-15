import React, { Suspense, Component } from "react";
import NavBar from "../../atoms/Navbar/Navbar";
import StartupActions from "../../../Stores/Startup/Actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SideBar from '../../atoms/SideBar/';
import Main from "./Main";
import RouteSuspense from "../../../Navigators/Layout/RouteSuspense";
import { Switch, Route, Redirect } from "react-router-dom";



function DashboardContainer (props) { 
    const {  role, authenticated, routes } = props
    const isSidebarOpen = true;

    return (
        <div className={`pvt-layout flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
            <SideBar {...props} items={props.routes} role={props.role}  />
            <div className="flex flex-col flex-1 w-full">
                <NavBar color="dark" items={routes} role={role}  isAuthenticated={authenticated} />
                <Main {...props}/>
            </div>
        </div>
    )
}

DashboardContainer.propTypes = {
    navbarItems : PropTypes.array,
    navbarColor : PropTypes.array,
    navbarClases : PropTypes.object,
    role : PropTypes.string,
    authenticated : PropTypes.bool
}


export default DashboardContainer;
