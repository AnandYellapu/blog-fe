import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import CommentForm from '../comments/CommentForm';
import CommentList from '../comments/CommentList';

const FullPostContainer = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="full-post-container">
      {loading && <p className="loading">Loading...</p>}
      {post ? <FullPost post={post} /> : <p className="error">Failed to fetch post.</p>}
      <div className="comments-container">
        <CommentForm postId={id} />
        <CommentList postId={id} />
      </div>
    </div>
  );
};

const FullPost = ({ post }) => {
  const contentParagraphs = post.content.split('\n').map((paragraph, index) => (
    <p key={index} className="post-content1">
      {paragraph}
    </p>
  ));

  return (
    <div className="post-container1">
      <h2 className="post-title1">{post.title}</h2>
      {post.imageUrl && (
        <img
          className="post-image1"
          src={post.imageUrl}
          alt={post.name}
          onError={(e) => {
            console.error('Image failed to load:', e.target.src);
          }}
        />
      )}
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




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import { BiEdit } from 'react-icons/bi';
// import { MdDelete } from 'react-icons/md';
// import CommentForm from '../comments/CommentForm';
// import CommentList from '../comments/CommentList';

// const FullPostContainer = () => {
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const token = sessionStorage.getItem('token');

//         if (!token) {
//           console.error('No token, cannot fetch post');
//           return;
//         }

//         const headers = {
//           'Content-Type': 'application/json',
//           'x-auth-token': token,
//         };

//         const response = await axios.get(`http://localhost:1200/api/posts/${id}`, { headers });
//         setPost(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   return (
//     <div className="full-post-container">
//       {loading && <p className="loading">Loading...</p>}
//       {post ? <FullPost post={post} /> : <p className="error">Failed to fetch post.</p>}
//       <div className="comments-container">
//         <CommentForm postId={id} />
//         <CommentList postId={id} />
//       </div>
//     </div>
//   );
// };

// const FullPost = ({ post }) => {
//   const contentParagraphs = post.content.split('\n').map((paragraph, index) => (
//     <p key={index} className="post-content1">
//       {paragraph}
//     </p>
//   ));

//   // Check if the user object is present and has a role property
//   const isAdmin = post.user && post.user.role && post.user.role === 'admin';

//   useEffect(() => {
//     // Log to console if the user is an admin
//     if (isAdmin) {
//       console.log('User is an admin!');
//     }
//   }, [isAdmin]);

//   return (
//     <div className="post-container1">
//       <h2 className="post-title1">{post.title}</h2>
//       {post.imageUrl && (
//         <img
//           className="post-image1"
//           src={post.imageUrl}
//           alt={post.name}
//           onError={(e) => {
//             console.error('Image failed to load:', e.target.src);
//           }}
//         />
//       )}
//       {contentParagraphs}
//       <p className="post-author1">Author: {post.author}</p>
//       <p className="post-created-at1">Created At: {new Date(post.createdAt).toLocaleString()}</p>
//       {post.lastSeenTime && (
//         <div>
//           <p className="last-seen1">Last Seen: {new Date(post.lastSeenTime).toLocaleString()}</p>
          
//           {/* Conditionally render edit and delete icons if the user is an admin */}
//           {isAdmin && (
//             <>
//               <Link to={`/update/${post._id}`} className="edit-icon">
//                 <BiEdit />
//               </Link>
//               <Link to={`/delete/${post._id}`} className="delete-icon">
//                 <MdDelete />
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FullPostContainer;
