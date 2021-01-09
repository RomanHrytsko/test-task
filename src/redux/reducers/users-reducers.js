import {GET_USERS} from "../action-types";

const initialState ={
    users:[]
}

export default (state = initialState, action)=> {
    switch (action.type) {
        case GET_USERS: {

            return {...state, users: action.payload}
        }

        default: {
            return {...state}
        } //TODO create error
    }
}