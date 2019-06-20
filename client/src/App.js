import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Gallery from "./components/Gallery";
class App extends Component {
  render() {
    return (
      <Container className="App">
        <Gallery />
      </Container>
    );
  }
}

export default App;
