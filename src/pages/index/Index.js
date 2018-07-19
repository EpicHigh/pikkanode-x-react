import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import CardList from "../../components/CardList";
import Pokemon from "../../db/pokemon";
import Scroll from "../../components/Scroll";
import "./App.css";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      Pokemon: Pokemon,
      inputBox: ``
    };
  }

  onSearchChange = event => {
    this.setState({ inputBox: event.target.value });
  };

  render() {
    const filteredPokemon = this.state.Pokemon.filter(Pokemon => {
      return String(Pokemon.name).includes(String(this.state.inputBox));
    });
    return (
      <div className="App">
        <SearchBar searchChange={this.onSearchChange} />
        <Scroll>
          <CardList Pokemon={filteredPokemon} />
        </Scroll>
      </div>
    );
  }
}

export default Index;
