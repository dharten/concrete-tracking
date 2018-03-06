import axios from "axios";

export function getJobsList() {
  return dispatch => {
    axios.get("/concrete").then(response => {
      dispatch({
        type: "GET_JOBS_LIST",
        data: response.data
      })
    })
  }
}

export function addJob(job) {
  return dispatch => {
    axios.post("/concrete", job).then(response => {
      dispatch({
        type: "ADD_JOB",
        data: response.data
      })
    })
  }
}

export function deleteJob(id) {
  return dispatch => {
    axios.delete(`/concrete/${id}`).then(response => {
      dispatch({
        type: "DELETE_JOB",
        data: response.data
      })
    })
  }
}

export function checkOutJobs(jobs) {
  return dispatch => {
    const ids = jobs.map(job => job._id);
    axios.put(`/concrete/job-list`, {ids}).then(response => {
      dispatch({
        type: "GET_JOBS_LIST",
        data: response.data
      })
    })
  }
}

export function checkInJob(id) {
  return dispatch => {
    axios.put(`/concrete/check-in`, {id}).then(response => {
      console.log(response.data);
      dispatch({
        type: "GET_JOBS_LIST",
        data: response.data
      })
    })
  }
}

export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "GET_JOBS_LIST":
      return action.data
    case "ADD_JOB":
      return [...prevState, action.data]
    case "DELETE_JOB":
      return prevState.filter(job => job._id !== action.data._id)
    default:
      return prevState;
  }
}
