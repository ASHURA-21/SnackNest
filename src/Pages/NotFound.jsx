import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Optional for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops!
        Sorry, seems the page you are looking for isn't available or has yet to be added so go away now🫵🏾
        you glutton.
      </p>
      <Link to="/" className="back-home">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
