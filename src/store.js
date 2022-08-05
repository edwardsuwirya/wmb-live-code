import {applyMiddleware, combineReducers, createStore} from "redux";
import {authenticationReducer} from "./features/login/state/AuthenticationReducer";
import {orderReducer} from "./features/customerOrder/state/CustomerOrderReducer";
import {menuReducer} from "./features/menu/state/MenuReducer";
import thunk from "redux-thunk";
import {UIReducer} from "./shared/uistate/UIReducer";

const rootReducer = combineReducers({
    authenticationReducer,
    orderReducer,
    menuReducer,
    UIReducer
})
export const setupStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}