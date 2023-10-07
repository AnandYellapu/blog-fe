// // src/components/PostList.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
//     const token = sessionStorage.getItem('token');

//     // Check if the token is available
//     if (!token) {
//       console.error('No token, cannot fetch posts');
//       return;
//     }

//     // Set up headers with the authentication token
//     const headers = {
//       'Content-Type': 'application/json',
//       'x-auth-token': token,
//     };

//     // Fetch posts from the server
//     axios.get('https://blog-sl4b.onrender.com/api/posts/post-list', { headers })
//       .then(response => {
//         setPosts(response.data);
//         console.log('Fetched Posts:', response.data); // Log the fetched posts
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       <div className="welcome-message">
//         <h1 className='welcome'>Welcome to Mix Blog!</h1>
//         <p className='content1'>
//           Explore our latest posts and stay updated with interesting content. Mix Blog is
//           your go-to source for thought-provoking articles, insightful stories, and much more.
//         </p>
//         <p className='content2'>
//           Whether you're a seasoned reader or a newcomer, we have something for everyone. Dive
//           into our collection of posts, and don't forget to share your favorite ones!
//         </p>
//       </div>
//       <div className="post-list-container">
//         <h2 className="post-list-title">Post List</h2>
//         <ul className="post-list">
//           {posts.map(post => (
//             <li key={post._id} className="post-item">
//               <h3 className="post-title">{post.title}</h3>
//               <p className="post-content">{post.content}</p>
//               <Link to={`/full/${post._id}`} className="read-more-button">Read more</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PostList;




// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';  // Import the toast module

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the authentication token from wherever it's stored (e.g., sessionStorage)
    const token = sessionStorage.getItem('token');

    // Check if the token is available
    if (!token) {
      // Display toast message prompting the user to login
      toast.info('Please login to create or view the post list');
      console.error('No token, cannot fetch posts');
      return;
    }

    // Set up headers with the authentication token
    const headers = {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    };

    // Fetch posts from the server
    axios.get('https://blog-sl4b.onrender.com/api/posts/post-list', { headers })
      .then(response => {
        setPosts(response.data);
        console.log('Fetched Posts:', response.data); // Log the fetched posts
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="welcome-message">
        <h1 className='welcome'>Welcome to Mix Blog!</h1>
        <p className='content1'>
          Explore our latest posts and stay updated with interesting content. Mix Blog is
          your go-to source for thought-provoking articles, insightful stories, and much more.
        </p>
        <p className='content2'>
          Whether you're a seasoned reader or a newcomer, we have something for everyone. Dive
          into our collection of posts, and don't forget to share your favorite ones!
        </p>
      </div>
      <div className="post-list-container">
        <h2 className="post-list-title">Post List</h2>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post._id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <Link to={`/full/${post._id}`} className="read-more-button">Read more</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;





