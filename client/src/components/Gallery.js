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
      active: 1,
      pages: 1
    };
  }
  handlePage = async page => {
    const search = this.state.search || undefined;
    const { posts, pages } = await getPosts(page, search);
    this.setState({ posts, pages });
  };

  async componentDidMount() {
    const { posts, pages } = await getPosts();
    this.setState({ posts, pages });
  }
  breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  handleSearch = async e => {
    e.preventDefault();
    const { posts, pages } = await getPosts(0, this.state.search);
    this.setState({ posts, pages });
  };
  render() {
    const posts = this.state.posts.map(post => (
      <div key={post._id}>
        <img className="image" width="200" src={post.image} alt={post.name} />
        <div>
          <h5>{post.name}</h5>
        </div>
      </div>
    ));
    return (
      <>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          search={this.state.search}
        />
        <Masonry
          breakpointCols={this.breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts}
        </Masonry>
        <Pagination handlePage={this.handlePage} pages={this.state.pages} />
      </>
    );
  }
}

export default Gallery;
