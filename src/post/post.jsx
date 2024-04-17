import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const [postComments, setPostComments] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('samplePostData'));
    let foundPost = null;
    let subcomments = [];

    posts["posts"].forEach(post => {
      if(parseInt(post["id"],10) === parseInt(id,10)){
        foundPost = post;
      }
    });

    if(foundPost){
      localStorage.setItem('currentPost', foundPost["id"]);
      setPostTitle(foundPost['user'] + ' wrote:');
      setPostContent(foundPost['message']);
      subcomments = foundPost['comments'];

      let commentContent = '';
      subcomments.forEach(subcomment => {
        commentContent += insertComments(subcomment, 1);
      });

      setPostComments(commentContent);
    } else {
      setPostTitle('Post Not Found');
      setPostContent('');
    }
  }, [id]); // Run effect only when id changes

  return (
    <main>
      <h1 id="title">{postTitle}</h1>
      <p className="post-content loaded-comment" id="post-content">{postContent}</p>
      <br></br>
      <div className="post-comments">
        <h2 id="comment-title">Comments:</h2>
        <div id="loaded-comments" dangerouslySetInnerHTML={{ __html: postComments }}></div>
      </div>
      <form id="main-comment">
        <div className="login-form">
          <label htmlFor="comment" className="comment-label" id="comment-label">Click on any comment or the main post to comment</label><br></br>
          <input type="text" id="comment-input" name="comment" defaultValue=""></input><br></br>
          <input className="form-button" type="submit" value="Submit"></input>
        </div>
      </form>
      <div id="error-message"></div>
    </main>
  );
}

function insertComments(parentComment, depth) {
  let html = htmlBuilder(parentComment["message"], depth, parentComment["id"]);

  if(parentComment["subcomments"].length > 0){
    parentComment["subcomments"].forEach(comment => {
      html += insertComments(comment, depth + 1);
    });
  }

  return html;
}

function htmlBuilder(commentText, depth, id) {
  let html = '';

  if(depth === 1){
    html = `<p class="loaded-comment" id="${id}">${commentText}</p>`;
  } else {
    html = `<p class="loaded-comment" id="${id}">`;
    for(let i = 0; i < depth - 1; i++){
      html += '<span>';
    }
    html += `${commentText}`;
    for(let i = 0; i < depth - 1; i++){
      html += '</span>';
    }
    html += '</p>';
  }

  return html;
}

export default Post;