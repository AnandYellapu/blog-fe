
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

        const response = await axios.get(`https://blog-sl4b.onrender.com/api/comments/${postId}`, { headers });
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




// // src/components/comments/CommentList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { IoMdTrash } from 'react-icons/io';

// const CommentList = ({ postId }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const token = sessionStorage.getItem('token');

//         if (!token) {
//           console.error('No token, cannot fetch comments');
//           return;
//         }

//         const headers = {
//           'Content-Type': 'application/json',
//           'x-auth-token': token,
//         };

//         const response = await axios.get(`https://blog-sl4b.onrender.com/api/comments/${postId}`, { headers });
//         setComments(response.data);
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     };

//     fetchComments();
//   }, [postId]);

//   const handleDeleteComment = async (commentId) => {
//     try {
//       const token = sessionStorage.getItem('token');

//       if (!token) {
//         console.error('No token, cannot delete comment');
//         return;
//       }

//       const headers = {
//         'Content-Type': 'application/json',
//         'x-auth-token': token,
//       };

//       const response = await axios.delete(`https://blog-sl4b.onrender.com/api/comments/${commentId}`, { headers });
//       console.log('Delete Comment Response:', response.data);

//       // Update comments state after successful deletion
//       setComments(prevComments => prevComments.filter(comment => comment._id !== commentId));
//     } catch (error) {
//       console.error('Error deleting comment:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Comments</h3>
//       <ul>
//         {comments && comments.map(comment => (
//           <li key={comment._id}>
//             <p>{comment.content}</p>
//             <p>Posted by: {comment.userId}</p>
//             {/* Use IoMdTrash as delete icon */}
//             <span onClick={() => handleDeleteComment(comment._id)}><IoMdTrash /></span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CommentList;
