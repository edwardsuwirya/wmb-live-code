import {LOGIN_ACTION_TYPE} from "../../../shared/constants";
import {RequestHelper} from "../../../services/RequestHelper";

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

export const authenticationAction = (request) => async (dispatch) => {
    const result = await RequestHelper(dispatch, request)
    if (result) {
        dispatch(userLogin(result))
    }
}