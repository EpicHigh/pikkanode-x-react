import React, { Component } from "react";
import Routes from "./routes"
import Navbar from "../components/Navbar"

class App extends Component {
	state = {
		isAuth: false
	};

	onChangeIsAuth = () => {
		this.setState({isAuth: true})
	};

	render() {
		return (
			<div>
				<Navbar/>
				<Routes onChangeIsAuth={this.onChangeIsAuth}/>
			</div>
		)
	}
}

export default App