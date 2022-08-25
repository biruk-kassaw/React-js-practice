import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetch from './postsService';
import './style.css';

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const newposts = await fetch();
      setPosts(newposts);
    })();
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {posts.map((post) => {
        return (
          <>
            <span>{post.title}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}
