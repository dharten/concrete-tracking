import React from "react";
import {connect} from "react-redux";
import {addJob} from "../../../redux/Job";

import Form from "./Form";

class AddJob extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      jobId: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: ""
      },
      phone: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(prevState => {
      const address = prevState.address;
      if (e.target.name === "street" || e.target.name === "city" ||
          e.target.name === "state" || e.target.name === "zip") {
        address[e.target.name] = e.target.value;
        return {address}
      }
      return {
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addJob(this.state);
  }


  render() {
    return(
      <div>
        <Form
          value={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default connect(null, {addJob})(AddJob);
