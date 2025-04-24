import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import PostCard from '../components/PostCard';
import Toast from '../components/Toast';
import { usePosts } from '../context/PostContext';
import useToast from '../hooks/useToast';

const HomePage = () => {
  const { posts, loading, deletePost } = usePosts();
  const { toast, showToast } = useToast();

  const handleDeletePost = (id) => {
    deletePost(id);
    showToast('Post deleted successfully!');
  };

  return (
    <main className="container">
      <section className="hero">
        <h2>Welcome to MicroBlog</h2>
        <p>A simple blogging platform that works entirely in your browser.</p>
      </section>

      <section className="posts-container">
        <h3>
          <FontAwesomeIcon icon={faNewspaper} /> Latest Posts
        </h3>
        
        <div id="posts" className="posts-grid">
          {loading ? (
            <>
              <div className="skeleton-loader"></div>
              <div className="skeleton-loader"></div>
            </>
          ) : posts.length === 0 ? (
            <div className="no-posts">
              No posts yet. <Link to="/new">Create the first post!</Link>
            </div>
          ) : (
            posts.map(post => (
              <PostCard 
                key={post.id} 
                post={post} 
                onDelete={handleDeletePost} 
              />
            ))
          )}
        </div>
      </section>

      <Toast 
        visible={toast.visible} 
        message={toast.message} 
        isSuccess={toast.isSuccess} 
      />
    </main>
  );
};

export default HomePage;