import './LoginView.css';
import {withUiState} from "../../shared/hoc/WithUiState";

function LoginView(props) {
    const handleLogin = async () => {

        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(true)
            }, 3000)
        })
        props.onShowLoading(true);
        try {
            const response = await loginPromise
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

export default withUiState(LoginView);