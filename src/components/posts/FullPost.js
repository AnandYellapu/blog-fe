import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';

const FullPostContainer = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = sessionStorage.getItem('token');

        if (!token) {
          console.error('No token, cannot fetch post');
          return;
        }

        const headers = {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        };

        const response = await axios.get(`http://localhost:1200/api/posts/${id}`, { headers });
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="full-post-container">
      {post ? <FullPost post={post} /> : <p className="loading">Loading...</p>}
      <div className="comments-container">
        <CommentForm postId={id} />
        <CommentList postId={id} />
      </div>
    </div>
  );
};

const FullPost = ({ post }) => {
  // Splitting post content into an array of paragraphs
  const contentParagraphs = post.content.split('\n').map((paragraph, index) => (
    <p key={index} className="post-content1">
      {paragraph}
    </p>
  ));

  return (
    <div className="post-container1">
      <h2 className="post-title1">{post.title}</h2>
      {/* Rendering the array of paragraphs */}
      {contentParagraphs}
      <p className="post-author1">Author: {post.author}</p>
      <p className="post-created-at1">Created At: {new Date(post.createdAt).toLocaleString()}</p>
      {post.lastSeenTime && (
        <div>
          <p className="last-seen1">Last Seen: {new Date(post.lastSeenTime).toLocaleString()}</p>
          <Link to={`/update/${post._id}`} className="edit-icon">
            <BiEdit />
          </Link>
          <Link to={`/delete/${post._id}`} className="delete-icon">
            <MdDelete />
          </Link>
        </div>
      )}
    </div>
  );
};

export default FullPostContainer;
