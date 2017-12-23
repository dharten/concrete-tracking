import React, {Component} from "react";
import {connect} from "react-redux";
import CheckedOutJob from "./CheckOutJob.js"

import {getJobsList} from "../../../redux/Job";
import "./CheckedOutJobs.css";

class CheckedOutJobs extends Component{
  render() {
    const job = this.props.jobs.map(job => job.checkedOut === true && <CheckedOutJob key={job._id} job={job} />)
    return(
      <div className="checkedOut">
        <h2>Checked Out Jobs</h2>
        {job}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    jobs: state.jobs
  }
}

export default connect(mapStateToProps, {getJobsList})(CheckedOutJobs);
