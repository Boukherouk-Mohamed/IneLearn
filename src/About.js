import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <Link to="/"> Home</Link>
      <Link to="about"> About</Link>
    </div>
  )
}

export default About
