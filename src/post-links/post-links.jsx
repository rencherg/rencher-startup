import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function PostLinks() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        // Check if data is already loaded in localStorage
        const dataLoaded = localStorage.getItem('dataLoaded');
        if (!dataLoaded) {
          const response = await fetch('http://localhost:3000/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const responseData = await response.json();
          localStorage.setItem('samplePostData', JSON.stringify(responseData.samplePostData));
          localStorage.setItem('dataLoaded', true);
          setPosts(responseData.samplePostData.posts);
        } else {
          const postData = localStorage.getItem('samplePostData');
          setPosts(JSON.parse(postData).posts);
        }
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    }

    loadData();
  }, []); // Run only once when component mounts

  return (
    <main>
      <h1>All Recent Posts</h1>
      <div className="websocket-content main-link">
        {posts.map(post => (
          <div key={post.id}>
            <a href={'post.html?id=' + post.id}>{post.message}</a>
            <p>By {post.user}</p>
          </div>
        ))}
      </div>
      <br />
      <h3>
        <NavLink className="main-link-index" to="/websocket">
          All recent content (Websocket)
        </NavLink>
      </h3>
      <h3>
        <NavLink className="main-link-index" to="/newpost">
          New Post
        </NavLink>
      </h3>
    </main>
  );
}
