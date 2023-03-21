import React from 'react';

const Banner = () => (
  <div className="banner">
    <div className="banner-text">
      <h1>
        I am Jonathan Kayizzi
        <span>Full Stack</span>
        {' '}
        Engineer
      </h1>
      <p>
        Full Stack Engineer with 3 years of experience in building web
        applications. I have worked on projects using React, Redux, Node, Ruby
        on Rails, and PostgreSQL. I am passionate about building scalable and
        maintainable applications using micro services and REST APIs. I have 5+
        years of industrial experience in Aviation, 1 year in Banking and 1 year
        in Telecommunications
      </p>
      <div className="banner-btns">
        <button type="button">Contact Me</button>
        <button type="button">Download CV</button>
      </div>
    </div>
    <div className="banner-img">
      <img src="jk.jpg" alt="Banner" />
    </div>
  </div>
);

export default Banner;
