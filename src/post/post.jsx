import React from 'react';

export function Post() {
  return (
    <main>
      <h1 id="title"></h1>
      <p className="post-content" id="post-content">Yesterday I was at work. I didn't know it at the time but something important was about to happen.</p>
      <br></br>
      <div className="post-comments">
          <h2 id="comment-title">Comments:</h2>
          <div id="loaded-comments"></div>
      </div>
      <form id="main-comment">
          <div className="login-form">
              <label for="comment" className="comment-label" id="comment-label">Click on any comment or the main post to comment</label><br></br>
              <input type="text" id="comment-input" name="comment" value=""></input><br></br>
              <input className="form-button" type="submit" value="Submit"></input>
          </div>
      </form>
      <div id="error-message"></div>
    </main>
  );
}
