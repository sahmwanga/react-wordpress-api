import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PostDetails extends Component {
  state = {
    book: [],
    isLoaded: false,
    mediaUrl: ""
  };

  componentDidMount() {
    axios
      .get(`/wp-json/wp/v2/posts/${this.props.match.params.id}`)
      .then(response => {
        const featured_media_id = response.data.featured_media;
        if (featured_media_id) {
          axios.get(`/wp-json/wp/v2/media/${featured_media_id}`).then(res => {
            console.log(res.data.source_url);
            this.setState({
              post: response.data,
              isLoaded: true,
              mediaUrl: res.data.source_url
            });
          });
        } else {
          this.setState({
            post: response.data,
            isLoaded: true
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isLoaded, post, mediaUrl } = this.state;
    if (isLoaded) {
      return (
        <div className="my-3">
          <Link to="/">Go Back</Link>
          <hr />
          <div className="card">
            <img
              src={mediaUrl}
              className="card-img-top"
              alt="..."
              style={{ height: 250 }}
            />
            <div className="card-body">
              <h3>{post.title.rendered}</h3>
              <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
