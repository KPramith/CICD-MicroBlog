import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { usePosts } from '../context/PostContext';
import { getAuthorName, saveAuthorName } from '../utils/localStorage';

const PostForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const { addPost } = usePosts();
  const navigate = useNavigate();

  // Load saved author name on component mount
  useEffect(() => {
    const savedAuthor = getAuthorName();
    if (savedAuthor) {
      setAuthor(savedAuthor);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show loading state
    setStatus('loading');
    
    try {
      // Add the new post
      addPost({ title, author, content });
      
      // Save author name for future use
      saveAuthorName(author);
      
      // Show success message
      setStatus('success');
      
      // Redirect to homepage after 1.5 seconds
      setTimeout(() => {
        navigate('/');
        if (onSuccess) {
          onSuccess('Post published successfully!');
        }
      }, 1500);
      
    } catch (error) {
      console.error('Error publishing post:', error);
      setStatus('error');
    }
  };

  return (
    <form id="post-form" className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter post title..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          placeholder="Your name..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Write your post here..."
        />
      </div>
      
      <div className="form-actions">
        <Link to="/" className="btn-secondary">Cancel</Link>
        <button type="submit" className="btn-primary">
          Publish <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      
      {status && (
        <div id="form-status" className="form-status">
          {status === 'loading' && (
            <p className="loading">Publishing your post...</p>
          )}
          {status === 'success' && (
            <p className="success">Post published successfully! Redirecting to homepage...</p>
          )}
          {status === 'error' && (
            <p className="error">Error publishing post. Please try again.</p>
          )}
        </div>
      )}
    </form>
  );
};

export default PostForm;