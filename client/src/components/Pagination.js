import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
class Paging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }

  handlePage = number => {
    this.setState({ active: number });
    this.props.handlePage(number + 1);
  };
  render() {
    const arr = new Array(this.props.pages).fill(1);
    const pages = arr.map((p, number) => (
      <Pagination.Item
        key={number + 1}
        active={number + 1 === this.state.active}
        onClick={() => {
          this.handlePage(number + 1);
        }}
      >
        {number + 1}
      </Pagination.Item>
    ));
    return (
      <div className="Paging">
        <Pagination>{pages}</Pagination>
      </div>
    );
  }
}

export default Paging;
