import React, { createContext, useState, useContext, useEffect } from 'react';
import { getPosts,addPost as addPostToStorage, deletePost as deletePostFromStorage } from '../utils/localStorage';

// Create context
const PostContext = createContext();

// Create provider component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load posts from localStorage on initial render
  useEffect(() => {
    const loadPosts = () => {
      const storedPosts = getPosts();
      setPosts(storedPosts);
      setLoading(false);
    };
    
    loadPosts();
  }, []);

  // Add a new post
  const addPost = (post) => {
    const newPost = addPostToStorage(post);
    setPosts(prevPosts => [newPost, ...prevPosts]);
    return newPost;
  };

  // Delete a post
  const deletePost = (id) => {
    const updatedPosts = deletePostFromStorage(id);
    setPosts(updatedPosts);
    return updatedPosts;
  };

  return (
    <PostContext.Provider value={{ posts, loading, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the post context
export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};