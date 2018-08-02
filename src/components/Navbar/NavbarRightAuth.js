import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../../actions/actions";

const NavbarRightAuth = props => (
  <div className="navbar-right w-50">
    <div className="wrapper-navbar-right">
      <Link
        className="f6-ns dib black bg-animate hover-bg-black hover-near-white b--dark-gray no-underline pv2-ns ph4-ns br-pill ba b--black-90 sign-out ml3-ns"
        to="/signup"
        title="Sign-up"
        onClick={() => props.dispatch(logOut)}
      >
        Sign Out
      </Link>
    </div>
  </div>
);

export default connect()(NavbarRightAuth)