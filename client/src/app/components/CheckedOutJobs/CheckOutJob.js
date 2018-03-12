import React, {Component} from "react";
import Modal from "./Modal";
import NewSamplesForm from "./Modal/NewSamplesForm.js";
import {checkInJob} from "../../../redux/Job";
import {connect} from "react-redux";

class CheckedOutJob extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
    // this.handleDelete = this.handleDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  checkIn() {
    const id = this.props.job._id;
    this.props.checkInJob(id);
  }

  render() {
    return(
      <div key={this.props.job._id} className="clientInfo">
        <div>
          <label>Client Name: </label>
          <span>{this.props.job.name}</span>
        </div>
        <button onClick={() => this.openModal()}>Add Sample</button>
        <div>
          <button onClick={() => this.checkIn()}>Check Back In</button>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>{this.props.job.name}</h1>
          <p>Job ID: {this.props.job.jobId}</p>
          <p>Phone: {this.props.job.phone}</p>
          <p>Address: {this.props.job.address.street, this.props.job.address.city, this.props.job.address.state, this.props.job.address.zip}</p>
          <NewSamplesForm />
          {/* <button className="delete" onClick={this.handleDelete}>Delete</button> */}
          <button className="closeModal" onClick={() => this.closeModal()}>Close</button>
        </Modal>
      </div>
    )
  }
}


export default connect(state => state, {checkInJob})(CheckedOutJob);
