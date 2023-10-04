// CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentAdded }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('No token, cannot add comment');
        return;
      }

      const headers = {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      };

      // Clear the text area before making the POST request
      setFeedback('');

      await axios.post(
        'http://localhost:1200/api/comments/comment',
        {
          feedback,
          postId,
        },
        { headers }
      );

      // Optionally, you can fetch updated comments and update the state
      onCommentAdded();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <label className="comment-form__label">
          Comment:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="comment-form__textarea"
            placeholder='add a comment...'
          />
        </label>
        <br />
        <button className="comment-form__submit" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

