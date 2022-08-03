import './LoginView.css';
import {withUiState} from "../../shared/hoc/WithUiState";
import {userLogin} from "./state/AuthenticationAction";
import {connect} from "react-redux";
import {withDep} from "../../shared/hoc/WIthDep";

function LoginView(props) {
    const service = props.AuthenticationService;
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
            <div className='login-section'>
                <div className='login-image-section'>
                </div>
                <div className='login-form-section'>
                    <div className='login-header login-color'>Welcome To WMB <br/> Management System</div>
                    <div className='login-form'>
                        <label className='login-color'>User Name</label>
                        <input className='login-input' type='text'/>
                        <label className='login-color'>Password</label>
                        <input className='login-input' type='password'/>
                        <div className='login-button' onClick={handleLogin}>Login</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// cara singkat
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapDispatchToProps = {
    userLogin,
}
export default connect(null, mapDispatchToProps)(withDep(withUiState(LoginView), ['AuthenticationService']));