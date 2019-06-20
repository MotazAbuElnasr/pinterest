import React, { Component } from "react";
import getPosts from "../services/postsFetch";
import Masonry from "react-masonry-css";
import "../css/gallery.css";
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
  // Generalizing input change
  handleInputChange = e => {
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
  render() {
    const { search, pages, activePage, posts } = this.state;
    const renderedPosts = posts.map(post => (
      <div key={post._id} className="pin-container">
        <img className="image" width="200" src={post.image} alt={post.name} />
        <p className="name">{post.name}</p>
      </div>
    ));

    // For responsive Masonry
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      775: 2,
      500: 1
    };
    return (
      <>
        <Search
          onChange={this.handleInputChange}
          onSubmit={this.handleSearch}
          search={search}
        />
        {posts.length ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {renderedPosts}
          </Masonry>
        ) : (
          <img
            alt="no results"
            className="no-result"
            src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png"
          />
        )}
        <Pagination
          onPageChange={this.handlePageChange}
          pages={pages}
          activePage={activePage}
        />
      </>
    );
  }
}

export default Gallery;
