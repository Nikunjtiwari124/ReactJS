import { createStore, combineReducers } from "redux";
import { peReducer } from "../Redux/reducer/reducer";

const rootReducer = combineReducers({
    todos: peReducer,   
});

export default createStore(rootReducer);