import Immutable from "seamless-immutable"

import { HomePageActionTypes } from "../actions/actionTypes"

const homepage = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomePageActionTypes.TEST:
      return {
        ...state,
        text: state.text + 1
      }
    default:
      return state
  }
}

const INITIAL_STATE = Immutable({
  text: 0
})

export default homepage
