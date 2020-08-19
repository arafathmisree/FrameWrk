import React from "react";
import NavBar from "../../atoms/Navbar/Navbar";
import StartupActions from "../../../Stores/Startup/Actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const DashboardContainer = ({navbarItems, role }) => {
    console.log("role",role)
    return <NavBar color="dark" items={navbarItems} role={role} />
}

DashboardContainer.propTypes = {
    navbarItems : PropTypes.array,
    navbarColor : PropTypes.array,
    navbarClases : PropTypes.object,
    role : PropTypes.string
}


export default DashboardContainer;
