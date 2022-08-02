import {LOGIN_ACTION_TYPE} from "../../../shared/constants";

export function userLogin(userName) {
    return {
        type: LOGIN_ACTION_TYPE.LOGIN,
        payload: {
            userName: userName
        }
    }
}

export function userLogout() {
    return {
        type: LOGIN_ACTION_TYPE.LOGOUT,
    }
}
