import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-light bg-white">
          <Link className="navbar-brand" to="/">
            OKE
          </Link>
        </nav>
      </div>
    </div>
  );
}
