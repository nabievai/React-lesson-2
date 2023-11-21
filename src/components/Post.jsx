import React from 'react';
import styles from './Post.module.css';

const Post = ({id, title, body}) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
      <span>ID: {id}</span>
    </div>
  );
};

export default Post;