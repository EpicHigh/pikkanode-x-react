import React from "react";
import { Link } from "react-router-dom";

const logo = `https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png`;

const Navbar = () => {
  return (
    <div>
      <nav className="pa3 pa4-ns bb b--white-10">
        <div className="navbar">
          <div className="navbar-left w-50">
            <Link to="/" title="home">
              <img
                className="br-100 pa1 ba b--black-10 h3 w3 logo"
                src={logo}
                alt="Pikkanode Logo"
              />
            </Link>
            <Link
              className="link dim gray f6 f5-ns dib mr3 ml3"
              to="/about"
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
                title="Sign-up"
              >
                Sign Up
              </Link>
              <Link
                className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90"
                to="/signin"
                title="Sign-in"
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
