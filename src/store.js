import {combineReducers, createStore} from "redux";
import {authenticationReducer} from "./features/login/state/AuthenticationReducer";
import {orderReducer} from "./features/customerOrder/state/CustomerOrderReducer";
import {menuReducer} from "./features/menu/state/MenuReducer";

const rootReducer = combineReducers({
    authenticationReducer,
    orderReducer,
    menuReducer
})
export const setupStore = () => {
    return createStore(rootReducer)
}