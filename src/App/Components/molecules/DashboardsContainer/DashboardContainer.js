import React from "react";
import NavBar from "../../atoms/Navbar/Navbar";
import StartupActions from "../../../Stores/Startup/Actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SideBar from '../../atoms/SideBar/';



function DashboardContainer (props) {
    const { navbarItems, role, authenticated } = props
 
    return (<div className="pvt-layout flex h-screen bg-gray-50 dark:bg-gray-900" style={{ minHeight: '100vh'}}>
            <SideBar {...props} items={props.routes} role={props.role}  />
            <div className="flex flex-col flex-1 w-full">
            <NavBar color="dark" items={navbarItems} role={role}  isAuthenticated={authenticated} />
                <main className="h-full overflow-y-auto">
                    <div className="px-6 mx-auto grid"> 
                        { props.children }
                    </div>
                </main>
            </div>
        </div>
    )
}

DashboardContainer.propTypes = {
    navbarItems : PropTypes.array,
    navbarColor : PropTypes.array,
    navbarClases : PropTypes.object,
    role : PropTypes.string,
    authenticated : PropTypes.bool,
    children : PropTypes.node
}


export default DashboardContainer;
