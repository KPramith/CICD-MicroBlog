# MicroBlog React

A simple blogging platform that works entirely in your browser. All posts are stored in localStorage.

## Features

- Create and publish blog posts
- View all published posts on the homepage
- Delete unwanted posts
- Responsive design for all device sizes
- Toast notifications for user actions
- All data stored locally in your browser
- No backend or database required

## Tech Stack

- React 18
- React Router 6
- FontAwesome icons
- LocalStorage for data persistence
- CSS3 for styling
- Netlify for deployment

## Project Structure

```
microblog-react/
├── public/               # Public assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.js     # Navigation header
│   │   ├── Footer.js     # Footer component
│   │   ├── Toast.js      # Toast notification
│   │   ├── PostCard.js   # Individual post display
│   │   └── PostForm.js   # Form for creating new posts
│   ├── pages/            # Page components
│   │   ├── HomePage.js   # Home page showing all posts
│   │   └── NewPostPage.js # Page for creating new posts
│   ├── utils/            # Utility functions
│   │   └── localStorage.js # LocalStorage data handling
│   ├── hooks/            # Custom React hooks
│   │   └── useToast.js   # Hook for toast notifications
│   ├── context/          # React context providers
│   │   └── PostContext.js # Context for managing posts state
│   ├── styles/           # CSS styles
│   │   └── index.css     # Main stylesheet
│   ├── App.js            # Main application component
│   └── index.js          # Entry point
├── netlify.toml          # Netlify configuration
└── package.json          # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 14+ and npm installed on your machine

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/microblog-react.git
   cd microblog-react
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to http://localhost:3000

## Deployment

This project is configured for easy deployment to Netlify.

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Click "Deploy site"

Alternatively, you can use the Netlify CLI:

1. Install the Netlify CLI globally
   ```bash
   npm install -g netlify-cli
   ```

2. Build your project
   ```bash
   npm run build
   ```

3. Deploy to Netlify
   ```bash
   netlify deploy --prod
   ```

## Limitations

- Posts are not persistent (they will be lost when the server restarts)
- No user authentication or authorization
- No post editing or reacting functionality

## Extending the Project

Here are some ideas to extend this project:

- Add local storage to persist posts between server restarts
- Implement post editing and reacting
- Add simple authentication
- Add categories or tags for posts
- Implement a simple search functionality
- Add Markdown support for post content

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite

### Local Storage Data Structure

The app uses the following localStorage keys:

- `microblog-posts` - Array of blog post objects
- `authorName` - Last used author name for convenience

## Acknowledgements

- Design inspired by modern minimalist blog platforms
- Icons provided by [FontAwesome](https://fontawesome.com/)
- Deployed and hosted on [Netlify](https://www.netlify.com/)

## License

This project is MIT licensed.