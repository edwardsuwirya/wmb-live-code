import './LoginView.css';
import {withUiState} from "../../shared/hoc/WithUiState";
import AuthenticationService from "../../services/AuthenticationService";
import {userLogin} from "./state/AuthenticationAction";
import {connect} from "react-redux";

function LoginView(props) {
    const service = AuthenticationService();
    const handleLogin = async () => {
        props.onShowLoading(true);
        try {
            const response = await service.Authenticate({})
            props.onShowLoading(false);
            if (response) {
                props.userLogin('Edo')
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

// cara singkat
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapDispatchToProps = {
    userLogin,
}
export default connect(null, mapDispatchToProps)(withUiState(LoginView));