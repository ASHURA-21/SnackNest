import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import {Suspense,} from "react";
import Loader from "./Loader";

const NotFound = () => {
  return (
<Suspense fallback={<Loader />}>
    <div className="not-found">
      <h1>404</h1>
      <p>Oops!
        Sorry, seems the page you are looking for isn't available or has yet to be added so go away now🫵🏾
        you glutton.
      </p>
      <Link to="/" className="back-home">Go back to Home</Link>
    </div>
    </Suspense>
  );
};

export default NotFound;
