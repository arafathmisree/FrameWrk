import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavTheme } from "./NavStyles";
import { Link, withRouter } from "react-router-dom";
import StartupActions from "../../../Stores/Startup/Actions";
import { connect } from "react-redux";
import { Badge } from "../Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function NavBar(props) {
  const { items, color, role, isAuthenticated } = props;
  console.log("props222", props);

  const [cn, setCount] = useState(0);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);
  return (
    <header
      className={`${NavTheme[color]} shadow sm:flex sm:justify-between sm:items-center sm:px-4`}
    >
      <div className="flex items-center justify-between px-4 py-1 sm:p-0 shadow md:shadow-none">
        <div>
          <a href="#" className="block py-3"></a>
        </div>

        <div className="md:hidden">
          <button className="block text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {/* show close icon when mobile menu is open */}
              {/* <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> */}
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav className="pt-2 pb-4 sm:flex sm:p-0">
        <Badge  count={cn}>
        <FontAwesomeIcon  icon={faBell} />
          
        </Badge>

        {items.map((item, index) => {
          if (!isAuthenticated && item.auth == false) {
            return (
              <Link to={item.path}>
                {" "}
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-3 hover:opacity-75"
                >
                  {item.title}
                </a>{" "}
              </Link>
            );
          } else if (
            isAuthenticated &&
            item.auth == true &&
            item.roles.find((roleItem) => roleItem == role) == role
          ) {
            if (item.path == "/user/logout") {
              return (
                <a
                  onClick={() => props.logOut()}
                  key={index}
                  href="#"
                  className="block px-4 py-3 hover:opacity-75"
                >
                  {item.title}{" "}
                </a>
              );
            } else {
              return (
                <Link to={item.path}>
                  {" "}
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-3 hover:opacity-75"
                  >
                    {item.title}
                  </a>{" "}
                </Link>
              );
            }
          }
        })}
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  items: PropTypes.object.isRequired,
  color: PropTypes.string,
  role: PropTypes.string,
};

const mapStateToProps = (state) => ({
  count: state.startup.notificationCount,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(StartupActions.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
