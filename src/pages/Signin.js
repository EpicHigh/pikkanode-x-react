import React, { Component } from "react";
import axios from "axios";

class Signin extends Component {
  handleFormSubmit = async event => {
    event.preventDefault();
    const email = String(event.target.elements["email-address"].value);
    const pass = String(event.target.elements.password.value);
    await this.postRequest(email, pass);
	  event.target.elements["email-address"].value = "";
	  event.target.elements.password.value = ""
  };

  postRequest = async (email, password) => {
    try {
      const data = { email, password };
      const response = await axios.post(`http://localhost:3333/signin`, data);
      const status = JSON.parse(response.request.responseText).status;
      console.log(status);
      status !== "success"
        ? this.setState({ error: status })
        : this.props.onChangeIsAuth()
    } catch (e) {
      console.error(`แอบเออเร่อนะจ๊ะ แต่เธอไม่รู้บ้างเลย`)
    }
  };

  state = {
    error: ``
  };

  render() {
    return (
      <main className="pa4 black-80">
        <form
          className="measure center"
          onSubmit={event => this.handleFormSubmit(event, this.props.isAuth)}
          method="post"
        >
          {this.state.error && (
            <div className="alert alert-danger">{this.state.error}</div>
          )}
          <fieldset className="ba b--transparent ph0 mh0" id="sign_up">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="email-address"
                type="email"
                name="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="password"
                type="password"
                name="password"
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p>or</p>
            <a className="f4 link dim black" href="/signup">
              Sign up
            </a>
          </div>
        </form>
      </main>
    );
  }
}

export default Signin;
