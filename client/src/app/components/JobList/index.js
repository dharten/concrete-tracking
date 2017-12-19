import React, {Component} from "react";
import {connect} from "react-redux";
// import {BootstrapTable, TableHeaderColumn, InsertButton} from "react-bootstrap-table";

// import jobs from "../../../redux/Job";
// import "../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import {getJobsList, addJob, deleteJob} from "../../../redux/Job";
//
// const selectRowProp = {
//   mode: 'checkbox',
//   clickToSelect: true,
//   // hideSelectColumn: true,
//   // unselectable: [2],
//   // selected: [1],
//   bgColor: 'orange'
// };

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      checkboxState: false
    }
    // this.jobs = getJobsList();

    this.handleDeleteJob = this.handleDeleteJob.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleDeleteJob(e) {
    // for (let i = 0; i < row.length; i++) {
    //   this.props.deleteJob(row[i]);
    // }

    this.state.selectedItems.forEach(id => {
      this.props.deleteJob(id)
    });
  }

  handleCheckoutButton() {
    console.log("Checked out");
  }

  handleCheckbox(id, job) {
    job.checked = !job.checked
    this.setState({
      selectedItems: [...prevState, id],
    })
    console.log(this.state.selectedItems);
  }

  render() {
    return (
      <div>
        <h1>Current Jobs</h1>
        <p>The purpose of this page is to view the list of current jobs along with the number of samples that need to be tested for the current date.</p>
        <table>
          <thead>
            <tr>
              <th>Checkout</th>
              <th>Job ID</th>
              <th>Client ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.jobs.map(job => {
              job.isSelected = false;
              return(
                <tr key={job._id}>
                  <input
                    name="selectedItems"
                    value={job._id}
                    type="checkbox"
                    onClick={() => this.handleCheckbox(job._id, job)}/>
                  <td>{job._id}</td>
                  <td>{job.jobId}</td>
                  <td>{job.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button className="checkout" onClick={this.handleCheckoutButton}>Checkout</button>
        <button className="delete" onClick={this.handleDeleteJob}>Delete</button>
        {/* <InsertButton
          btnText="Checkout"
          onClick={() => this.handleCheckoutButton()}/>
        <BootstrapTable
            data={this.props.jobs}
            // remote={true}
            insertButton={true}
            deleteRow={true}
            options={{onDeleteRow: this.handleDeleteJob}, {insertBtn: this.handleCheckoutButton}}
            selectRow={selectRowProp}
            bodyStyle={{background: "white"}}>
          <TableHeaderColumn isKey dataField='_id'>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='jobId'>Client ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        </BootstrapTable> */}
        {/* <button onClick={this.handleDeleteJob}>Delete</button> */}
      </div>
    )}
  }

function mapStateToProps(state) {
  return{
    jobs: state.jobs
  }
}

export default connect(mapStateToProps, {getJobsList, addJob, deleteJob})(JobList);
