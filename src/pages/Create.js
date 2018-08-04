import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import uuid from "uuid";
import { storage, database } from "../db/firebase";

class Create extends Component {
  onFormSubmit = event => {
    event.preventDefault();
    const caption = event.target.elements.caption.value;
    const photo = event.target.elements.photo.files[0];
    try {
      if (caption && photo) {
        const storageRef = storage.ref();
        const databaseRef = database.ref("Pikkas");
        const unique = String(uuid());
        const name = unique.slice(0, unique.indexOf("-"));
        databaseRef.push({ pikka: name, caption });
        storageRef
          .child(`pikka/${name}`)
          .put(photo)
          .then(() => {
            console.log(`Upload successfully`);
            this.setState({ statusText: "OK" });
          });
      } else {
        this.setState({ error: "A caption and file required." });
      }
    } catch (e) {
      console.error(e.message);
      this.setState({ error: e.message });
    }
  };

  componentDidMount() {
    (function() {
      const uploader = document.getElementsByTagName("input");
      uploader[1].onchange = function(event) {
        console.log(`Change`);
        let reader = new FileReader();
        reader.onload = function() {
          const output = document.getElementById("output");
          output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      };
    })();
  }

  state = {
    statusText: ``,
    error: ``
  };

  render() {
    return (
      <div className="measure center paper" style={{ textAlign: "center" }}>
        {this.state.statusText === "OK" && <Redirect to="/" />}
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <p className="f4 lh-copy">
          Pikka Node loves pictures, Let's Pikka<span className="text-success">
            {" "}
            Load!
          </span>
        </p>
        <form
          encType="multipart/form-data"
          method="post"
          onSubmit={this.onFormSubmit}
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
                  className="center"
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
      </div>
    );
  }
}

export default Create;
