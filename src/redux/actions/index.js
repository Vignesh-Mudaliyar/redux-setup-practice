import { ActionTypes } from "../constants/ActionTypes"

export const login = (data) => {
    return (dispatch) => {
        dispatch({
            type:ActionTypes.LOGIN,
            payload:data
        })
    }
}

export const getTableData = (data) => {
    return (dispatch) => {
        dispatch({
            type:ActionTypes.GET_TABLEDATA,
            payload:data
        })
    }
}