import React from 'react';
import { Link } from "react-router-dom";
import AdminBar from "../Navigators/NavBar/Admin"
import UserBar from "../Navigators/NavBar/User"

const navBar = function(props){
    console.log(props);
    switch (props.role) {
        case 'admin':
            return <AdminBar/>
        case 'user':
            return <UserBar/>
        default:
            break;
    }
}
const NavBar = ( props ) => ( 
    <div>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            {
                navBar(props)
            }
        </ul>
        
    </div>
)  

export default NavBar;