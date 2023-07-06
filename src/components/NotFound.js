import React from "react";
import NoResults from "../assets/no-results.png";

const NotFound = () => {
  const notfound = NoResults;

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        src={notfound}
        className="flex-column align-items-center"
        alt="page not found"
      ></img>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
