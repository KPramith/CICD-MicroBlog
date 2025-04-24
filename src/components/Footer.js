import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} MicroBlog. A simple blogging platform.</p>
      </div>
    </footer>
  );
};

export default Footer;