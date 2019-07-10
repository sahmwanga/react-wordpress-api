import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Post from "./components/Post";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={Post} />
        <Route exact path="/:id" component={PostDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
