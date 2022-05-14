import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./Counter/reducer";
import { TodoReducer } from "./Todo/reducer";

const rootReducer = combineReducers({
    count: counterReducer,
    todo: TodoReducer
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
