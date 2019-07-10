import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PostItem extends Component {
  render() {
    const { title, excerpt, status, id } = this.props.post;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
          <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          <p className="badge badge-primary">{status}</p>
          <div>
            <Link to={`/${id}`}>View Details</Link>
          </div>
        </div>
      </div>
    );
  }
}
