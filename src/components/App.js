import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: { q: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ "margin-top": "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
