

// src/components/CreatePost.js
import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import the toast module

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1200/api/posts/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token'),
        },
        body: JSON.stringify({ title, content, author }),
      });

      if (!response.ok) {
        toast.info('Please login to create');
        throw new Error('Error creating post');
      }

      // Clear the form fields
      setTitle('');
      setContent('');
      setAuthor('');

      // Display success notification
      toast.success('Post created successfully!');

      const newPost = await response.json();
      console.log('New Post:', newPost);

      // Optionally, you can redirect to the post list or handle the response accordingly
      // history.push('/posts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          className="post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          className="post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          className="post-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <button type="submit" className="post-button">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

