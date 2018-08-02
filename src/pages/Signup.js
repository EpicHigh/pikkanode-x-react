import React, { Component } from "react";
import axios from "axios";
import server from "../db/server";

class Signup extends Component {
  state = {
    error: ``
  };

  onFormSubmit = event => {
    event.preventDefault();
    const email = String(event.target.elements["email-address"].value),
      pass = String(event.target.elements.password.value),
      confirmPass = String(event.target.elements["confirm-password"].value);
    pass !== confirmPass
      ? this.setState({
          error: `Your password and confirm password do not match, Pleases try again.`
        })
      : email.includes(" ") || pass.includes(" ") || confirmPass.includes(" ")
        ? this.setState({
            error: `Email address, password or confirm password are not spaces.`
          })
        : pass.length < 6
          ? this.setState({
              error: `Your password length must be at least 6 characters`
            })
          : this.postRequest(email, pass);
  };

  postRequest = async (email, password) => {
    try {
      const data = { email, password };
      const response = await axios.post(`${server}signup`, data);
      console.log(response.request.responseText);
    } catch (e) {
      console.error(`แอบเออเร่อนะจ๊ะ แต่เธอไม่รู้บ้างเลย`);
    }
  };

  render() {
    return (
      <main className="pa4 black-80">
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <form
          className="measure center"
          method="post"
          onSubmit={this.onFormSubmit}
        >
          <fieldset className="ba b--transparent ph0 mh0" id="sign_up">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="email-address"
                type="email"
                name="email-address"
                required="required"
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
                required="required"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="confirm-password"
                type="password"
                name="confirm-password"
                required="required"
              />
            </div>
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign Up"
            />
            <div className="mt3-ns">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="reset"
                value="Reset"
              />
            </div>
          </fieldset>
        </form>
      </main>
    );
  }
}

export default Signup;
