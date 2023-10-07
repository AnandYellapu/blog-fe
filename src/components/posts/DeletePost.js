

// // src/components/DeletePost.js
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { toast } from 'react-toastify';  // Import the toast module

// const DeletePost = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const handleDelete = async () => {
//       try {
//         // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
//         const token = sessionStorage.getItem('token');

//         // Check if the token is available
//         if (!token) {
//           console.error('No token, cannot delete post');
//           return;
//         }

//         // Set up headers with the authentication token
//         const headers = {
//           'Content-Type': 'application/json',
//           'x-auth-token': token,
//         };

//         // Show confirmation dialog before deleting
//         confirmAlert({
//           title: 'Confirm Delete',
//           message: 'Are you sure you want to delete this post?',
//           buttons: [
//             {
//               label: 'Yes',
//               onClick: async () => {
//                 // Make a DELETE request to delete the post
//                 await axios.delete(`http://localhost:1200/api/posts/${id}`, { headers });

//                 // Display success notification
//                 toast.success('Post deleted successfully!');

//                 // Redirect after successful deletion
//                 navigate('/');
//               },
//             },
//             {
//               label: 'No',
//               onClick: () => {
//                 navigate(-1);
//                 // Do nothing if the user chooses not to delete
//               },
//             },
//           ],
//         });
//       } catch (error) {
//         console.error(error);

//         // Display error notification
//         toast.error('Error deleting post. Please try again.');
//       }
//     };

//     // Trigger the delete function
//     handleDelete();
//   }, [id, navigate]);

//   return <div className="deleting-post">Deleting...</div>;
// };

// export default DeletePost;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css';
// import { toast } from 'react-toastify';

// const DeletePostButton = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     try {
//       setLoading(true);
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('No token, cannot delete post');
//         return;
//       }

//       // Use react-confirm-alert to show a confirmation dialog
//       confirmAlert({
//         title: 'Confirm Deletion',
//         message: 'Are you sure you want to delete this post?',
//         buttons: [
//           {
//             label: 'Yes',
//             onClick: async () => {
//               // Make a DELETE request to delete the post
//               await axios.delete(`http://localhost:1200/api/posts/${id}`, {
                
//                 headers: {
//                   'Content-Type': 'application/json',
//                   'x-auth-token': token,
//                 },
//               });
//               toast.success('Post deleted successfully!');
//               console.log('Post deleted successfully');
//               navigate('/');
//             },
//           },
//           {
//             label: 'No',
//             onClick: () => {
//               navigate(-1);
//               toast.info('cancelled deleting the post')
//               console.log('Deletion cancelled');
//             },
//           },
//         ],
//       });
//     } catch (error) {
//       console.error('Error deleting post:', error);
//       toast.error('Error deleting post');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect to trigger handleDelete when the component mounts or 'id' changes
//   useEffect(() => {
//     // Remove the initial call to handleDelete from useEffect
//   }, [id]);

//   return (
//     <button className={`delete-button ${loading ? 'loading' : ''}`} onClick={handleDelete} disabled={loading}>
//       {loading ? 'Deleting...' : 'Delete Post'}
//     </button>
//   );
// };

// export default DeletePostButton;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const DeletePostButton = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleDelete = async () => {
//     try {
//       setLoading(true);
//       // Retrieve the authentication token from wherever it's stored (e.g., localStorage)
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('No token, cannot delete post');
//         return;
//       }

//       // Make a DELETE request to delete the post
//       await axios.delete(`http://localhost:1200/api/posts/${id}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': token,
//         },
//       });
//       // Assuming you have some logic to update the UI after successful deletion
//       console.log('Post deleted successfully');

//       // Navigate to the home page after successful deletion
//       navigate('/');
//     } catch (error) {
//       console.error('Error deleting post:', error);
//       // Handle and display the error to the user
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect to trigger handleDelete when the component mounts or 'id' changes
//   useEffect(() => {
//     handleDelete();
//   }, [id]);

//   return (
//     <button onClick={handleDelete} disabled={loading}>
//       {loading ? 'Deleting...' : 'Delete Post'}
//     </button>
//   );
// };

// export default DeletePostButton;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeletePostButton = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem('token');

      if (!token) {
        console.error('No token, cannot delete post');
        return;
      }

      await axios.delete(`http://localhost:1200/api/posts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      });

      console.log('Post deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting post:', error);
      // Handle and display the error to the user
    } finally {
      setLoading(false);
    }
  };

  // useEffect to trigger handleDelete when the component mounts or 'id' changes
  useEffect(() => {
    handleDelete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <button onClick={handleDelete} disabled={loading}>
      {loading ? 'Deleting...' : 'Delete Post'}
    </button>
  );
};

export default DeletePostButton;
