import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1 className="hello">
        hello!
        <span className="wave">👋</span>
      </h1>
      <h2 className="tagline">
        I&apos;m
        {' '}
        <span className="name"> Samkit Sheth </span>
        , a full-stack software engineer
        focused on building scalable web applications & beautiful interfaces
        <br />
        👨‍💻
      </h2>
      <h3 className="contact">
        <span>Get in touch </span>
        <span className="emojiPointer"> 👉 </span>
        <span>
          <a className="link" rel="noreferrer" href="mailto:samkitsheth95@gmail.com" target="_blank">
            samkitsheth95@gmail.com
          </a>
        </span>
      </h3>
    </div>
  );
}

export default Home;
