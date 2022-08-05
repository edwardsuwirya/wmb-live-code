import AuthenticationService from "./AuthenticationService";
import MenuService from "./MenuService";

export const ServiceFactory = () => {
    return {
        authenticationService: AuthenticationService(),
        menuService: MenuService()
    }
}