import React from 'react';

export function NewPost() {
  return (
    <main>
      <h1>New Post</h1>
      <form id="new-post" className="register-form">
          <textarea id="post-input" name="post-input" rows="10" cols="50"></textarea>
          <br></br>
          <input type="submit" className="new-post-button" value="Submit"></input>
      </form>
      <div id="errormessage"></div>
    </main>
  );
}
