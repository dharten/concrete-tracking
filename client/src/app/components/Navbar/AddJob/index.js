import React from "react";
import Form from "./Form";

class AddJob extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        type: String,
        required: true
      },
      jobId: {
        type: String,
        required: true
      },
      address: {
        street: String,
        city: String,
        state: String,
        zip: String
      },
      phone: String
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(e.target.name, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
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

export default AddJob;
