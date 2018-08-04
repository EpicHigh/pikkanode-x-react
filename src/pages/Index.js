import React, { Component } from "react";
import SearchBar from "../components/Index/SearchBar";
import CardList from "../components/Index/CardList";
import { addPikka } from "../actions/actions";
import { connect } from "react-redux";
import { database, storage } from "../db/firebase";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      inputBox: ``,
      load: true
    };
  }
  myFunction = () => {
    this.setState({ load: false });
  };

  componentDidMount() {
    database.ref("Pikkas").on("value", dataSnapshot => {
      dataSnapshot.forEach(childSnapshot => {
        storage
          .refFromURL(
            `gs://pikkanode2nd.appspot.com/pikka/${childSnapshot.val().pikka}`
          )
          .getDownloadURL()
          .then(url => {
            this.props.dispatch(
              addPikka({
                id: childSnapshot.key,
                name: childSnapshot.val().pikka,
                caption: childSnapshot.val().caption,
                url
              })
            );
          });
      });
    });
  }
  onSearchChange = event => {
    this.setState({ inputBox: event.target.value });
  };

  render() {
    const filteredPikka = this.props.pikka.filter(pikka => {
      return String(pikka.caption).includes(String(this.state.inputBox));
    });
    return (
      <div className="App">
        <SearchBar searchChange={this.onSearchChange} />
        <CardList
          Pikkas={filteredPikka}
          loaded={this.myFunction}
          loading={this.state.load}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pikka: state.pikka
  };
};

export default connect(mapStateToProps)(Index);
