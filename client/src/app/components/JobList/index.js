import React, {Component} from "react";
import {connect} from "react-redux";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

// import jobs from "../../../redux/Job";
import "../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";
import {getJobsList, addJob, deleteJob} from "../../../redux/Job";

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  // hideSelectColumn: true,
  // unselectable: [2],
  // selected: [1],
  bgColor: 'orange'
};

class JobList extends Component {
  constructor(props) {
    super(props);
    this.jobs = getJobsList();
    // this.state = {
    //   data: this.jobs
    // }
    this.handleDeleteJob = this.handleDeleteJob.bind(this);
  }

  handleDeleteJob(row) {
    row.forEach(id => {
      this.props.deleteJob(id)
    })

    // this.jobs = this.props.jobs.filter(job => {
    //   job._id === row.toString() && deleteJob();
    //   // return job._id !== row;
    //   console.log("jobId", job._id, "row", row.join());
    //   console.log("jobId", typeof job._id, "row", typeof row);
    // })
    // this.setState({
    //   data: this.jobs
    // })
  }

  render() {
    return (
      <div>
        <h1>Current Jobs</h1>
        <p>The purpose of this page is to view the list of current jobs along with the number of samples that need to be tested for the current date.</p>
        <BootstrapTable
            data={this.props.jobs}
            remote={true}
            deleteRow={true}
            options={{onDeleteRow: this.handleDeleteJob}}
            selectRow={selectRowProp}
            bodyStyle={{background: "white"}}>
            <TableHeaderColumn isKey dataField='_id'>Job ID</TableHeaderColumn>
            <TableHeaderColumn dataField='jobId'>Client ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        </BootstrapTable>
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
