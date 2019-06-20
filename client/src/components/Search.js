import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const Search = ({ onChange, onSubmit, search }) => {
  return (
    <div className="search-bar">
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Col lg={2} />
          <Col lg={7}>
            <Form.Control
              onChange={onChange}
              value={search}
              name="search"
              type="text"
              placeholder="Search"
            />
          </Col>
          <Col lg={3}>
            <Button onClick={onSubmit}>Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Search;
