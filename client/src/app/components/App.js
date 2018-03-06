import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";

import Home from "./Home";
import JobList from "../components/JobList";
import AddJob from "../components/AddJob";
import CheckedOutJobs from "../components/CheckedOutJobs";

function JobDetail(props) {
  const job = props.location.state;
  return (
    <div>
      <h1>Job ID: {job.jobId}</h1>
      <h3>Job Name: {job.name}</h3>
    </div>
  )
}

export default function App(props) {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/job-list" component={JobList}/>
        <Route path="/add-job" component={AddJob}/>
        <Route exact path="/checked-out" component={CheckedOutJobs}/>
        <Route path="/checked-out/:id" component={JobDetail}/>
      </Switch>
      <Footer />
    </div>
  )
}
