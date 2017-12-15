import React from "react";

export default function Form(props) {
  return(
    <form onSubmit={props.handleSubmit}>
      <label>Name(required)</label>
      <input
        name="name"
        value={props.name}
        type="text"
        onChange={props.handleChange}/>
      <label>Job ID(required)</label>
      <input
        name="jobid"
        value={props.jobid}
        type="text"
        onChange={props.handleChange}/>
      <label>Phone #</label>
      <input
        name="phone"
        value={props.phone}
        type="text"
        onChange={props.handleChange}/>
      <div>
        <label>Address</label>
        <input
          name="street"
          value={props.street}
          type="text"
          onChange={props.handleChange}
          placeholder="Street"/>
        <input
          name="city"
          value={props.city}
          type="text"
          onChange={props.handleChange}
          placeholder="City"/>
        <input
          name="state"
          value={props.state}
          type="text"
          onChange={props.handleChange}
          placeholder="State"/>
        <input
          name="zip"
          value={props.zip}
          type="text"
          onChange={props.handleChange}
          placeholder="Zip"/>
      </div>
      <button>Submit</button>
    </form>
  )
}
