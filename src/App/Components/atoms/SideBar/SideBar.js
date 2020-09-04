import React, {useCallback} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';



const SideBar = ( props ) => {
    const {items, color, role, isAuthenticated} = props 

    const checkActiveMenu = function(routerPath, equal=false) {
        const { pathname } =  props.location;
        console.log('Router', routerPath, pathname);
        if (equal) {
          return (pathname === routerPath 
            ?  (<span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>)
            : '')
        } else {
          return (pathname.includes(routerPath) 
          ? <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span> 
          : '')
        }
      };

    return ( 
    <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#logo" > Swivel App </a>
            <ul className="mt-6">
                <li className="relative px-6 py-3">
                <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>
                <a className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100" href="index.html">
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    <span className="ml-4">Dashboard</span>
                </a>
                </li>
            </ul>
            <ul>
            {
                items.map((item,index) => {
                    
                    

                    if (!isAuthenticated && item.auth===false){
                        return <Link to={item.path} key={index} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">{item.title} </Link>
                    }else if (isAuthenticated && item.auth==true && (item.roles.find(roleItem=>roleItem==role) == role)){
                        
                        return ( <li className="relative px-6 py-3">
                             { checkActiveMenu(item.path) }
                        <Link 
                            to={item.path} 
                            key={index} 
                            className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${'active'}`} href="forms.html">
                            <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                            </svg>
                            <span className="ml-4">{item.title}</span>
                        </Link>
                        </li>);
                    } else {
                        return ''
                    }
                })
            }
            </ul>
        </div>
    </aside>
)}

SideBar.propTypes = {
    items : PropTypes.object.isRequired,
    color : PropTypes.string,
    role : PropTypes.string
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

