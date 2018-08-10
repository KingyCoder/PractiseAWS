/******************************************************************************************************/
// Dependencies
/******************************************************************************************************/
import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
/******************************************************************************************************/
// Import Reducers
/******************************************************************************************************/
// import services from "./servicesReducer";
// import userData from "./userDataReducer";
// import { Reducers } from "platform-common-frontend";
/******************************************************************************************************/
// Combine Reducers
/******************************************************************************************************/
const appReducers = combineReducers({
  //   services,
  //   userData,
  //   platformNotifications: Reducers.PlatformNotificationsReducer,
  routerReducer
})

export default appReducers
