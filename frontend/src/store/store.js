import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reducers from "../reducers"

/******************************************************************************************************/
// Setup
/******************************************************************************************************/
// Dev Tools
const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

// Middleware to use
const middleware = [thunkMiddleware]
/******************************************************************************************************/
// Store
/******************************************************************************************************/
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

export { store }
