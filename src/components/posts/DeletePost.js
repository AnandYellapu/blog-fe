import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the styles

const DeletePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const handleDelete = async () => {
      try {
        // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
        const token = sessionStorage.getItem('token');

        // Check if the token is available
        if (!token) {
          console.error('No token, cannot delete post');
          return;
        }

        // Set up headers with the authentication token
        const headers = {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        };

        // Show confirmation dialog before deleting
        confirmAlert({
          title: 'Confirm Delete',
          message: 'Are you sure you want to delete this post?',
          buttons: [
            {
              label: 'Yes',
              onClick: async () => {
                // Make a DELETE request to delete the post
                await axios.delete(`http://localhost:1200/api/posts/${id}`, { headers });

                // Redirect after successful deletion
                navigate('/');
              },
            },
            {
              label: 'No',
              onClick: () => {
                // Do nothing if the user chooses not to delete
              },
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    // Trigger the delete function
    handleDelete();
  }, [id, navigate]);

  return <div className="deleting-post">Deleting...</div>;
};

export default DeletePost;
