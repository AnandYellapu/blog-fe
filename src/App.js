// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CreatePost from './components/posts/CreatePost';
import UpdatePost from './components/posts/UpdatePost';
import DeletePost from './components/posts/DeletePost';
import FullPost from './components/posts/FullPost';
import CommentForm from './components/comments/CommentForm';
import CommentList from './components/comments/CommentList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Logout from './components/auth/Logout';


const App = () => {
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/create-post"  element={<CreatePost />} />
        <Route path="/full/:id" element={<FullPost />} />
        <Route path="/update/:id"  element={<UpdatePost />} />
        <Route path="/delete/:id"  element={<DeletePost />} />
        <Route path="/comment" element={<CommentForm />} />
        <Route path="/comment/:commentId" element={<CommentList />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
     <Footer />
    </BrowserRouter>
  );
};

export default App;