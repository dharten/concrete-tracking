import React, {Component} from "react";
import {connect} from "react-redux";

class CheckedOutJobs extends Component{
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <h1>HI</h1>
    )
  }
}

function mapStateToProps(state) {
  return{
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(CheckedOutJobs);
