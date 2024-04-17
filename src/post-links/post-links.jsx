import React from 'react';
import { NavLink } from 'react-router-dom';

export function PostLinks() {
  return (
    <main>
      <h1>All Recent Posts</h1>
      <div className="websocket-content main-link"> 
      </div>
      <br />
      <h3><NavLink className="main-link-index" to='websocket'>All recent content (Websocket)</NavLink></h3>
      <h3><NavLink className="main-link-index" to='newpost'>New Post</NavLink></h3>
    </main>
  );
}
