import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "../reducers/AuthReducer";
import { NominaReducer } from "../reducers/NominaReducer";


const reducers = combineReducers({
  auth: authReducer,
  pausas: NominaReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
