import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import PostForm from '../components/PostForm';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';

const NewPostPage = () => {
  const { toast, showToast } = useToast();

  return (
    <main className="container">
      <section className="create-post">
        <h2>
          <FontAwesomeIcon icon={faEdit} /> Create New Post
        </h2>
        <PostForm onSuccess={(message) => showToast(message)} />
      </section>

      <Toast 
        visible={toast.visible} 
        message={toast.message} 
        isSuccess={toast.isSuccess} 
      />
    </main>
  );
};

export default NewPostPage;