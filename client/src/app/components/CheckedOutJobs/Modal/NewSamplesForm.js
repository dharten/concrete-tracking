import React, {Component} from "react";
import {connect} from "react-redux";

import {addSample} from "../../../../redux/Sample";

class NewSamplesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      sampleId: "",
      time: "",
      date: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e, prevState) {
    e.preventDefault();
    console.log(this.props)
    // this.props.addSample(this.state);
  }

  render() {
    const time = new Date().toLocaleTimeString();
    return(
      <form className="sampleForm" onSubmit={this.handleSubmit}>
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
          value={this.state.sampleId}
          onChange={this.handleChange}/>
        <label>Time </label>
        <input
          type="text"
          name="time"
          value={time}
          onChange={this.handleChange}/>
        <label>Date </label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}/>
          {/* <div>
            <button className="addNewSample" onClick={this.addNewSample}>+</button>
          </div> */}
          <div>
            <button className="submit" onClick={this.handleSubmit}>Submit Sample</button>
          </div>
      </form>
    )
  }
}

export default connect(null, {addSample})(NewSamplesForm)
