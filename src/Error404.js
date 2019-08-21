import React from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="error404">
      <h2>404 Error</h2>
      <p>
        That's original, isn't it?  I mean, no one says "404 Error" when they could instead tell you in nice,
        user-friendly prose that the page you have reached doesn't actually exist, do they?
      </p>
      <p>Well, they shouldn't, and I shouldn't either: that's not very nice of me.</p>
      <p>To make up for that little <i>faux pas</i>, I'm going to help you by pointing you in the right direction:</p>
      <Link to="/">Go to the main page of the application</Link>
    </div>
  );
};

export default Error404;
