import React, {Component} from "react";
import {connect} from "react-redux";

// import {getJobsList} from "../../../../redux";

class NewSamplesForm extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      sampleId: "",
      time: "",
      date: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Sample Location </label>
        <input
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleChange}/>
        <label>Sample ID </label>
        <input
          type="number"
          name="sampleId"
          value={this.state.location}
          onChange={this.handleChange}/>
        <label>Time </label>
        <input
          type="text"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}/>
        <label>Date </label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}/>
        <button>+</button>
        <button>Submit Samples</button>
      </form>
    )
  }
}

export default connect(state => state, null)(NewSamplesForm)
