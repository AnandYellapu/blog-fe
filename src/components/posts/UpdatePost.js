

// src/components/UpdatePost.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import the toast module

const UpdatePost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

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

        const response = await axios.get(`https://blog-sl4b.onrender.com/api/posts/${id}`, { headers });
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
      await axios.put(`https://blog-sl4b.onrender.com/api/posts/${id}`, { title, content, imageUrl }, { headers });

      // Display success notification
      toast.success('Post updated successfully!');

      // Optionally, you can redirect to the post details or handle the response accordingly
      navigate(`/full/${id}`);
    } catch (error) {
      console.error(error);

      // Display error notification
      toast.error('Error updating post. Please try again.');
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

        <label htmlFor="imageUrls">Image URL:</label>
        <textarea
          id="imageUrls"
          className="post-textarea"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
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
