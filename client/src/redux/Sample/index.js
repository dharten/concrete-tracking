import axios from "axios";

export function addSample() {
  return dispatch => {
    axios.put("/add-sample").then(response => {
      // dispatch ({
      //   type: "ADD_SAMPLE",
      //   data: response.data
      // })
    })
  }
}

export default function reducer(prevState = [], action) {
  switch (action.type) {
    case "ADD_SAMPLE":
      return action.data
    default:
      return prevState
  }
}
