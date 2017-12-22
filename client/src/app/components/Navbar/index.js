import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
    // var date = new Date().getMonth() + "/"
    //   + (new Date().getDate())  + "/"
    //   + new Date().getFullYear() + " ";
    // var time = new Date().getHours() + ":"
    //       + new Date().getMinutes() + ":"
    //       + new Date().getSeconds();

  return(
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/job-list">List of Jobs</Link>
      <Link to="/add-job">Add Job</Link>
      <Link to="/checked-out">Checked Out</Link>
      {/* <span>{date}</span> */}

    </nav>
  )
}
