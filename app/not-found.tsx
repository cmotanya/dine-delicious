import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, this page could not be found!</p>
      <Link href={"/"}>Go back to the homepage </Link>
    </div>
  );
};

export default NotFound;
