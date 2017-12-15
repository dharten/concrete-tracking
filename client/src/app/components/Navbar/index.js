import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return(
    <nav className="navbar">
      {/* <Link to="/">Home</Link> */}
      <Link to="/job-list">List of Jobs</Link>
      <Link to="/add-job">Add Job</Link>
    </nav>
  )
}
