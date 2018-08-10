import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "react-router-redux"
import thunkMiddleware from "redux-thunk"
//import appReducers from "../reducers"
import createHistory from "history/createHashHistory"
/******************************************************************************************************/
// Initial State
/******************************************************************************************************/
// import initialState from './initialState'
/******************************************************************************************************/
// Setup
/******************************************************************************************************/
// Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create browser history (>= IE10)
const history = createHistory()

// Build router middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)
// Middleware to use
const middleware = [thunkMiddleware, routeMiddleware]
/******************************************************************************************************/
// Store
/******************************************************************************************************/
const store = createStore(
  //appReducers,
  //initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

export { store, history }
