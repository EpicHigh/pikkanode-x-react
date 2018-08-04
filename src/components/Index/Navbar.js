import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavbarRightAuth from "../Navbar/NavbarRightAuth";
import NavbarRightUnAuth from "../Navbar/NavbarRightUnAuth";

const logo = `https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png`;

const Navbar = ({ isAuth }) => {
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
            {isAuth && (
              <Link
                className="link dim gray f6 f5-ns dib mr3"
                to="/create"
                title="Create"
              >
                Create
              </Link>
            )}
          </div>
          {isAuth ? <NavbarRightAuth /> : <NavbarRightUnAuth />}
        </div>
      </nav>
    </div>
  );
};

export default connect(state => ({ isAuth: state.isAuth }))(Navbar);
