import {ActionTypes} from "../constants/ActionTypes"

const initialValues= {
    isLogin:null,
}


export const authReducer =(state=initialValues,action) => {
        switch (action.type) {
            case ActionTypes.LOGIN:
                return {
                    isLogin:action.payload,
                }        
            default:
                return state;
        }
}


