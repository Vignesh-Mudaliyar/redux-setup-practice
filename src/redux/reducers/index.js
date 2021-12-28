
import {combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { TableReducer } from "./TableDataReducers";

const reducers = combineReducers({
    auth:authReducer,
    tableData:TableReducer,
})


export default reducers;