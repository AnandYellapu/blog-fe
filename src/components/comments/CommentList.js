
// src/components/comments/CommentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const token = sessionStorage.getItem('token');

        if (!token) {
          console.error('No token, cannot fetch comments');
          return;
        }

        const headers = {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        };

        const response = await axios.get(`http://localhost:1200/api/comments/${postId}`, { headers });
        console.log('Fetched Comments:', response.data);  // Add this line to check what's fetched
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  // Check if comments is still undefined
  console.log('Comments:', comments);

  return (
    <div className="comment-list-container">
      <h3 className="comment-list-title">Comments</h3>
      <ul className="comment-items">
        {comments && comments.map(comment => (
          <li key={comment._id} className="comment-item">
            <p className="comment-content">{comment.content}</p>
            <p className="comment-created">{comment.createdAt}</p>
            <p className="comment-posted-by">Posted by: {comment.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
