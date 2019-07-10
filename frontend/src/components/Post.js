import React, { Component } from "react";
import axios from "axios";
import PostItem from "./PostItem";

export default class Post extends Component {
  state = {
    posts: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/posts")
      .then(res => {
        this.setState({
          posts: res.data,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { posts, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div>
          {isLoaded}
          <h4>
            {posts.map(post => (
              <PostItem key={post.id} post={post} />
            ))}
          </h4>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
