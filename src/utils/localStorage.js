// Data handling functions for localStorage
export function getPosts() {
    const posts = localStorage.getItem('microblog-posts');
    return posts ? JSON.parse(posts) : [
      {
        id: 1,
        title: 'Getting Started with MicroBlog',
        content: 'This is a simple blogging platform that works entirely in your browser. All posts are stored in localStorage.',
        author: 'Admin',
        date: new Date().toISOString()
      }
    ];
  }
  
  export function savePosts(posts) {
    localStorage.setItem('microblog-posts', JSON.stringify(posts));
  }
  
  export function addPost(post) {
    const posts = getPosts();
    const newPost = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      title: post.title,
      content: post.content,
      author: post.author,
      date: new Date().toISOString()
    };
    
    // Add new post at the beginning of the array
    const updatedPosts = [newPost, ...posts];
    savePosts(updatedPosts);
    return newPost;
  }
  
  export function deletePost(id) {
    const posts = getPosts();
    const updatedPosts = posts.filter(post => post.id !== parseInt(id));
    savePosts(updatedPosts);
    return updatedPosts;
  }
  
  export function saveAuthorName(name) {
    localStorage.setItem('authorName', name);
  }
  
  export function getAuthorName() {
    return localStorage.getItem('authorName') || '';
  }