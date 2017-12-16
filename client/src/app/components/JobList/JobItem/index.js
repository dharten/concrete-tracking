import React from "react"

export default function JobItem(props) {
  return(
    <div>
      <h2>{props.job.name}, {props.job.jobId}</h2>
    </div>
  )
}
