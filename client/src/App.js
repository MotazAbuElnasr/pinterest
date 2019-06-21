import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Container } from "react-bootstrap";
import Gallery from "./components/Gallery";
class App extends Component {
  render() {
    return (
      <Container className="App">
        <BrowserRouter>
          <Route path="*" exact component={Gallery} />
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
