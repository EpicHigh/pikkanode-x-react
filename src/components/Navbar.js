import React from "react";
import { Link } from "react-router-dom"

const logo = `https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png`;

const Navbar = () => {
  return (
    <div>
      <nav className="pa3 pa4-ns bb b--white-10">
        <div className="navbar">
          <div className="navbar-left w-50">
            <img className="br-100 pa1 ba b--black-10 h3 w3 logo" src={logo} />
            <Link
              className="link dim gray f6 f5-ns dib mr3 ml3"
              to="/"
              title="About"
            >
              About
            </Link>
            <Link
              className="link dim gray f6 f5-ns dib mr3"
              to="/contact"
              title="Contact"
            >
              Contact
            </Link>
            <Link
              className="link dim gray f6 f5-ns dib mr3"
              to="/create"
              title="Create"
            >
              Create
            </Link>
          </div>
          <div className="navbar-right w-50">
            <div className="wrapper-navbar-right">
              <Link
                className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90 ml3-ns"
                to="/signup"
              >
                Sign Up
              </Link>
              <Link
                className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90"
                to="/signin"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
