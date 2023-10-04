import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
        const token = sessionStorage.getItem('token');

        // Check if the token is available
        if (!token) {
          console.error('No token, cannot fetch post');
          return;
        }

        // Set up headers with the authentication token
        const headers = {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        };

        const response = await axios.get(`http://localhost:1200/api/posts/${id}`, { headers });
        const postData = response.data;

        setTitle(postData.title);
        setContent(postData.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
      const token = sessionStorage.getItem('token');

      // Check if the token is available
      if (!token) {
        console.error('No token, cannot update post');
        return;
      }

      // Set up headers with the authentication token
      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      };

      // Make a PUT request to update the post
      await axios.put(`http://localhost:1200/api/posts/${id}`, { title, content }, { headers });

      // Optionally, you can redirect to the post details or handle the response accordingly
      // history.push(`/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-post-container">
      <h2 className="update-post-title">Update Post</h2>
      <form className="update-post-form" onSubmit={handleSubmit}>
        <label className="update-post-label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="update-post-input"
          required
        />

        <label className="update-post-label">Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="update-post-textarea"
          required
        />

        <button type="submit" className="update-post-button">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
