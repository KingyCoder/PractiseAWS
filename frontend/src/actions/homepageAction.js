import { HomePageActionTypes } from "./actionTypes"

export const requestTest = () => {
  return dispatch => {
    dispatch({
      type: HomePageActionTypes.TEST,
      text: "Test"
    })
  }
}
