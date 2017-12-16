import React from "react";
import {connect} from "react-redux";
import {getJobsList, addJob} from "../../../redux/Job";
import Job from "./JobItem";

function JobList(props) {
  const jobs = props.jobs.map(job => {
    return(
      <Job
        key={job._id}
        job={job}/>
    )
  })
  return(
    <div>
      {jobs}
    </div>
  );
}

function mapStateToProps(state) {
  return{
    jobs: state.jobs
  }
}

export default connect(mapStateToProps, {getJobsList, addJob})(JobList);
