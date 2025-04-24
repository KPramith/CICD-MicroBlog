import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


const PostCard = ({ post, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setIsDeleting(true);
      
      // Delayed delete to allow for animation
      setTimeout(() => {
        onDelete(post.id);
      }, 300);
    }
  };

  return (
    <article className={`post-card ${isDeleting ? 'fade-out' : ''}`} data-id={post.id}>
      <div className="post-content">
        <div className="post-header">
          <h3>{post.title}</h3>
          <button className="delete-btn" title="Delete post" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <p className="post-meta">
          <span>
            <FontAwesomeIcon icon={faUser} /> {post.author}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} /> {formatDate(post.date)}
          </span>
        </p>
        <p className="post-excerpt">
          {post.content.substring(0, 400)}
          {post.content.length > 400 ? '...' : ''}
        </p>
      </div>
    </article>
  );
};

export default PostCard;