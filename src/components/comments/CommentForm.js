

// src/components/comments/CommentForm.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1200/api/comments/create-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token'),
        },
        body: JSON.stringify({ postId, content }),
      });

      if (!response.ok) {
        toast.error('Error creating comment');
        throw new Error('Error creating comment');
      }

      // Clear the form field
      setContent('');

      // Display success notification
      toast.success('Comment created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label className="comment-label" htmlFor="content">Comment:</label>
      <textarea
        className="comment-textarea"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='add comment...'
        required
      />
      <button className="comment-submit-btn" type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
