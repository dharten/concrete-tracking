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

export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "GET_JOBS_LIST":
      return action.data
    case "ADD_JOB":
      return [...prevState, action.data]
    default:
      return prevState;
  }
}
