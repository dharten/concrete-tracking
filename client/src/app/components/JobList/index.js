import React, {Component} from "react";
import {connect} from "react-redux";
import Checkbox from "./Checkbox";
import {getJobsList, deleteJob, checkOutJobs} from "../../../redux/Job";

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
    this.props.checkOutJobs(this.state.selectedItems);
  }

  render() {
    const availableJobs = this.props.jobs
    .filter(job => job.checkedOut === false)
    .map(job => {
      return(
        <tr key={job._id}>
          <Checkbox job={job} addItem={this.addToSelectedItems}/>
          <td>{job.name}</td>
          <td>{job.jobId}</td>
        </tr>
      )
    })

    const checkedOutJobs = this.props.jobs
    .filter(job => job.checkedOut === true)
    .map(job => {
      return(
        <tr key={job._id}>
          <td>User ID</td>
          <td>{job.name}</td>
          <td>{job.jobId}</td>
        </tr>
      )
    })

    return (
      <div>
        <h1>Avaible Jobs</h1>
        <p>The purpose of this page is to view the list of current jobs along with the number of samples that need to be tested for the current date.</p>
        <table>
          <thead>
            <tr>
              <th>Checkout</th>
              <th>Client Name</th>
              <th>Client ID</th>
            </tr>
          </thead>
          <tbody>
            {availableJobs}
          </tbody>
        </table>
        <div>
          <button className="checkout" onClick={() => this.handleCheckoutButton()}>Checkout</button>
        </div>
        <button className="delete" onClick={this.handleDeleteJob}>Delete</button>
        <h1>Checked Out Jobs</h1>
        <table>
          <thead>
            <tr>
              <th>Checked Out By</th>
              <th>Client Name</th>
              <th>Client ID</th>
            </tr>
          </thead>
          <tbody>
            {checkedOutJobs}
          </tbody>
        </table>

      </div>
    )
  }
}

  function mapStateToProps(state) {
    return{
      jobs: state.jobs
    }
  }

export default connect(mapStateToProps, {getJobsList, deleteJob, checkOutJobs})(JobList);
