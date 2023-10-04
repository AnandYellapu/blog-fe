// CommentList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ commentId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
        const token = sessionStorage.getItem('token');

        // Check if the token is available
        if (!token) {
          console.error('No token, cannot fetch comments');
          return;
        }

        // Set up headers with the authentication token
        const headers = {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        };

        // Fetch comments from the server
        const response = await axios.get(`http://localhost:1200/api/comments/comment/${commentId}`, { headers });
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [commentId]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comment-list-container">
      <h3 className="comment-list__title">Comments</h3>
      <ul className="comment-list__list">
        {comments.map((comment) => (
          <li key={comment._id} className="comment-list__item">
            <p className="comment-list__feedback">{comment.feedback}</p>
            <p className="comment-list__timestamp">At: {new Date(comment.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;




