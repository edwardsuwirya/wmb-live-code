import {MENU_ACTION_TYPE} from "../../../shared/constants";

export function addFBMenu(food, bev) {
    return {
        type: MENU_ACTION_TYPE.ADD_FB_MENU,
        payload: {
            food, bev
        }
    }
}
