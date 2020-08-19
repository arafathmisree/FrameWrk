import React from "react";
import PropTypes from "prop-types";
import { NavTheme } from './NavStyles';

function NavBar({items, color,role}) {

    return (

            <header className={`${NavTheme[color]} shadow sm:flex sm:justify-between sm:items-center sm:px-4`}>
                <div className="flex items-center justify-between px-4 py-1 sm:p-0 shadow md:shadow-none">
                    <div>
                        <a href="#" className="block py-3">Logo</a>
                    </div>

                    <div className="md:hidden">
                        <button className="block text-white focus:text-white focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {/* show close icon when mobile menu is open */}
                                {/* <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> */}
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className="pt-2 pb-4 sm:flex sm:p-0">
                    {
                        items.map((item,index)=>{
                            return <a key={index} href={item.path} className="block px-4 py-3 hover:opacity-75">{item.title}</a>
                        })
                    }
                    {/*<a href="#" className="block px-4 py-3 hover:opacity-75">Home</a>*/}
                    {/*<a href="#" className="block px-4 py-3 hover:opacity-75">Blog</a>*/}
                    {/*<a href="#" className="block px-4 py-3 hover:opacity-75">About Us</a>*/}
                    {/*<a hr e f="#" className="block px-4 py-3 hover:opacity-75">Contact Us</a>*/}
                </nav>
            </header>

    )
}

NavBar.propTypes = {
    items : PropTypes.object.isRequired,
    color : PropTypes.string,
    role : PropTypes.string
}

export default NavBar;
