import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route} from "react-router";
import JobList from "./Navbar/JobList";
import AddJob from "./Navbar/AddJob";

export default function App(props) {
  return(
    <div>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        <Route path="/job-list" component={JobList}/>
        <Route path="/add-job" component={AddJob}/>
      </Switch>
      <Footer />
    </div>
  )
}
