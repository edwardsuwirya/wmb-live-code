import {MENU_ACTION_TYPE} from "../../../shared/constants";
import {RequestHelper} from "../../../services/RequestHelper";

export function addFBMenu(food, bev) {
    return {
        type: MENU_ACTION_TYPE.ADD_FB_MENU,
        payload: {
            food, bev
        }
    }
}

export const menuAction = (request) => async (dispatch) => {
    const result = await RequestHelper(dispatch, request);
    if (result) {
        dispatch({type: 'success', payload: {data: result}})
    }

}