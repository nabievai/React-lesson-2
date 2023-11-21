import React from 'react';
import Post from './components/Post';
import './App.css';

const DATA = [
  {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "lorem lorem lorem lorem"
  },
  {
      id: 2,
      title: "qui est esse",
      body: "lorem lorem lorem lorem"
  },
  {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "lorem lorem lorem lorem"
  },
  {
      id: 4,
      title: "eum et est occaecati",
      body: "lorem lorem lorem lorem"
  },
  {
      id: 5,
      title: "nesciunt quas odio",
      body: "lorem lorem lorem lorem"
  },
]

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="posts-container">
        {DATA.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;
