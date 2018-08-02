import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../db/server"
import axios from "axios";

class Create extends Component {
  handleFormSubmit = async event => {
    event.preventDefault();
    const caption = event.target.elements.caption.value;
    const photo = event.target.elements.photo.files[0];
    const data = new FormData();
    data.append("caption", caption);
    data.append("photo", photo);
    await this.postRequest(data);
  };

  postRequest = async data => {
    try {
    	const options = {
		    method: "post",
		    url: `${api}/create`,
		    data: data,
		    headers: {"Content-Type": "multipart/form-data"}
	    };
      const response = await axios(options);
      console.log(response.statusText);
      this.setState({statusText: response.statusText})
    } catch (e) {
      console.error(`แอบเออเร่อนะจ๊ะ แต่เธอไม่รู้บ้างเลย`);
    }
  };

  state = {
	  statusText: ``
  };

  render() {
    return (
      <div className="measure center paper">
	      {this.state.statusText === "OK" && <Redirect to="/"/>}
        <center>
          <p className="f4 lh-copy">
            Pikka Node loves pictures, Let's Pikka<span className="text-success">
              {" "}
              Load!
            </span>
          </p>
          <form
            encType="multipart/form-data"
            method="post"
            onSubmit={this.handleFormSubmit}
          >
            <input
              className="input-search"
              name="caption"
              placeholder="Add some captions"
            />
            <div className="pt2-ns">
              <div className="wrapper">
                <div className="file-upload">
                  <p>Choose a file</p>
                  <input
                    name="photo"
                    type="file"
                    accept="image/jpeg, image/png"
                  />
                </div>
              </div>
            </div>
            <div className="pt2-ns">
              <button className="submit" type="submit" value="Submit">
                <i className="fas fa-upload fa-2x" />
              </button>
            </div>
          </form>
          <div className="pt2-ns">
            <img id="output" alt="File output" />
          </div>
        </center>
        <script src="./scripts/uploadSuccess.js" />
      </div>
    );
  }
}

export default Create;
