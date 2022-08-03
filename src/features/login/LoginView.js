import './LoginView.css';
import {withUiState} from "../../shared/hoc/WithUiState";
import {withDep} from "../../shared/hoc/WIthDep";

function LoginView(props) {
    const service = props.AuthenticationService;
    const handleLogin = async () => {
        props.onShowLoading(true);
        try {
            const response = await service.Authenticate({})
            props.onShowLoading(false);
            if (response) {
                props.handleLoggedIn(true)
            }
        } catch (e) {
            props.onShowError(e.message);
        }

    }
    return (
        <div className='login-container'>
            <h2>WMB Login</h2>
            <div>
                <button onClick={handleLogin}>Login
                </button>
            </div>
        </div>
    )
}

export default withDep(withUiState(LoginView), ['AuthenticationService'])