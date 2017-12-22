import React, {Component} from "react";
import Modal from "./Modal";
import NewSamplesForm from "./Modal/NewSamplesForm.js";

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
    console.log(this.props);
  }

  render() {
    return(
      <div key={this.props.job._id} className="clientInfo">
        <div>
          <label>Client Name: </label>
          <span>{this.props.job.name}</span>
        </div>
        <button onClick={() => this.openModal()}>Add Sample</button>
        <button onClick={() => this.checkIn()}>Check In</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>{this.props.job.name}</h1>
          <p>Job ID: {this.props.jobId}</p>
          <p>Phone: {this.props.job.phone}</p>
          <p>Address: {this.props.job.address.street} {this.props.job.address.city} {this.props.job.address.state} {this.props.job.address.zip}</p>
          <NewSamplesForm />
          {/* <button className="delete" onClick={this.handleDelete}>Delete</button> */}
          <button onClick={() => this.closeModal()}>Close</button>
        </Modal>
      </div>
    )
  }
}


export default CheckedOutJob;
