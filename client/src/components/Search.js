import React from "react";
import "./gallery.css";
import { Col, Form, Button } from "react-bootstrap";

const Search = ({ handleChange, handleSearch, search }) => {
  return (
    <div className="search-bar">
      <Form onSubmit={handleSearch}>
        <Form.Row>
          <Col lg={2} />
          <Col lg={7}>
            <Form.Control
              onChange={handleChange}
              value={search}
              name="search"
              type="text"
              placeholder="Search"
            />
          </Col>
          <Col lg={3}>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Search;
