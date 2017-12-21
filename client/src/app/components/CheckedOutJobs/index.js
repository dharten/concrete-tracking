import React, {Component} from "react";
import {connect} from "react-redux";

import {getJobsList, deleteJob} from "../../../redux/Job";
import "./CheckedOutJobs.css";

class CheckedOutJobs extends Component{
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    console.log(getJobsList());
  }

  render() {
    const job = this.props.jobs.map(job => {
      return(
          <div key={job._id} className="clientInfo">
            <div>
              <label>Client Name: </label>
              <span>{job.name}</span>
              <div>
                <label>Client Id: </label>
                <span>{job.jobId}</span>
              </div>
            </div>
            {/* <label>Client Address: </label>
            <span>{job.name}</span> */}
          </div>
      )
    })
    return(
      <div>
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
