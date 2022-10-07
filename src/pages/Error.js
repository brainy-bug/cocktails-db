import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container">
        <h2>Whoops! Something went wrong...</h2>
        <p>The page you are looking for, doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
