import React from "react";
import {Link} from "react-router-dom";

const NavbarRightUnAuth = () => (
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
);

export default NavbarRightUnAuth