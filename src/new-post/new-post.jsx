import React from 'react';

export function NewPost() {

  const [errorMessage, setErrorMessage] = useState('');
  const [post, setPost] = useState('');

  const handlePostChange = (event) => {
    setPost(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the value of the textarea
    const postContent = event.target.elements['post-input'].value.trim();
    
    // Do something with the post content, for example, log it to the console
    console.log('Submitted post content:', postContent);
    
    // You can also perform other actions here, like sending the data to a server
    // or updating the state of a parent component
    
    // Optionally, you can clear the form after submission
    event.target.reset();
  };

  return (
    <main>
      <h1>New Post</h1>
      <form id="new-post" className="register-form" onSubmit={handleSubmit}>
          <textarea id="post-input" name="post-input" rows="10" cols="50"></textarea>
          <br></br>
          <input type="submit" className="new-post-button" value="Submit">{post}</input>
      </form>
      <div id="errormessage">{errorMessage}</div>
    </main>
  );
}
