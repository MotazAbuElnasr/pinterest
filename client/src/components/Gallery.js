import React, { Component } from "react";
import getPosts from "../services/postsFetch";
import Masonry from "react-masonry-css";
import "./gallery.css";
import Search from "./Search";
import Pagination from "./Pagination";
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      posts: [],
      pages: 1,
      activePage: 1
    };
  }

  async componentDidMount() {
    const { posts, pages } = await getPosts();
    this.setState({ posts, pages });
  }

  handlePageChange = async activePage => {
    const search = this.state.search.trim();
    const { posts, pages } = await getPosts(activePage, search);
    this.setState({ posts, pages, activePage });
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSearch = async e => {
    e.preventDefault();
    const search = this.state.search.trim();
    const { posts, pages } = await getPosts(1, search);
    this.setState({ activePage: 1, posts, pages });
  };
  onPageChange(activePage) {
    this.setState({ activePage });
  }
  render() {
    const posts = this.state.posts.map(post => (
      <div key={post._id} className="pin-container">
        <img className="image" width="200" src={post.image} alt={post.name} />
        <p className="name">{post.name}</p>
      </div>
    ));
    // For responsive Masonry
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          search={this.state.search}
        />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {posts}
        </Masonry>
        <Pagination
          onPageChange={this.handlePageChange}
          pages={this.state.pages}
          activePage={this.state.activePage}
        />
      </>
    );
  }
}

export default Gallery;
