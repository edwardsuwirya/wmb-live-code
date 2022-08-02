import {LOGIN_ACTION_TYPE} from "../../../shared/constants";

const loginInitialState = {
    isAuthenticated: false,
    userName: ''
}

export function authenticationReducer(state = loginInitialState, action) {
    switch (action.type) {
        case LOGIN_ACTION_TYPE.LOGIN:
            return {...loginInitialState, userName: action.payload.userName, isAuthenticated: true};
        case LOGIN_ACTION_TYPE.LOGOUT:
            return {...loginInitialState, userName: ''};
        default:
            return state
    }
}
