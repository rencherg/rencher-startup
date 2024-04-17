import React from 'react';

export function PostLinks() {
  return (
    <main>
      <h1>All Recent Posts</h1>
      <div className="websocket-content main-link"> 
      </div>
      <br />
      <h3><a className="main-link-index" href="websocket.html">All recent content (Websocket)</a></h3>
      <h3><a className="main-link-index" href="newpost.html">New Post</a></h3>
    </main>
  );
}
