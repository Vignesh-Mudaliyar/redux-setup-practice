import {ActionTypes} from "../constants/ActionTypes"

const initialValues=[];



export const TableReducer =(state=initialValues,action) => {
        switch (action.type) {
            case ActionTypes.GET_TABLEDATA:
                return action.payload   
            default:
                return state;
        }
}


