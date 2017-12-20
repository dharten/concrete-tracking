import React, {Component} from "react";
import {connect} from "react-redux";
import Checkbox from "./Checkbox";
// import jobs from "../../../redux/Job";
import {getJobsList, deleteJob} from "../../../redux/Job";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
    this.handleCheckoutButton = this.handleCheckoutButton.bind(this);
    this.addToSelectedItems = this.addToSelectedItems.bind(this);
  }

  addToSelectedItems = (isChecked, job) => {
    let updatedItems;
    if (isChecked) {
      updatedItems = [...this.state.selectedItems, job]
    } else {
      updatedItems = this.state.selectedItems.filter(item => item._id !== job._id);
    }
    this.setState({
      selectedItems: updatedItems
    });
  }

  handleDeleteJob(props) {
    this.state.selectedItems.map(item => {
      return this.props.deleteJob(item._id)
    })
  }

  handleCheckoutButton () {
    // Dispatch an action that should update these items to have `checkedOut: true`
    // in the database
    // When that finishes, forward the person to the "/checked-out" path
    this.props.history.push("/checked-out");
    // axios.get("/jobs?checkedOut=true")
  }

  render() {
    const jobList = this.props.jobs.map(job => {
      return(
        <tr key={job._id}>
          <Checkbox
            job={job}
            addItem={this.addToSelectedItems}/>
          {/* <td>{job._id}</td> */}
          <td>{job.name}</td>
          <td>{job.jobId}</td>
        </tr>
      )
    })

    return (
      <div>
        <h1>Current Jobs</h1>
        <p>The purpose of this page is to view the list of current jobs along with the number of samples that need to be tested for the current date.</p>
        <table>
          <thead>
            <tr>
              <th>Checkout</th>
              {/* <th>Job ID</th> */}
              <th>Client Name</th>
              <th>Client ID</th>
            </tr>
          </thead>
          <tbody>
            {jobList}
          </tbody>
        </table>
        <button className="checkout" onClick={() => this.handleCheckoutButton()}>Checkout</button>
        <button className="delete" onClick={this.handleDeleteJob}>Delete</button>
      </div>
    )
  }
}

  function mapStateToProps(state) {
    return{
      jobs: state.jobs
    }
  }

export default connect(mapStateToProps, {getJobsList, deleteJob})(JobList);
