import './LoginView.css';
import {withUiState} from "../../shared/hoc/WithUiState";
import {userLogin} from "./state/AuthenticationAction";
import {connect} from "react-redux";
import {Component} from "react";
import {DepContext} from "../../depContext";

class LoginView extends Component {
    handleLogin = async () => {
        this.props.onShowLoading(true);
        try {
            const response = await this.context.authenticationService.Authenticate({})
            this.props.onShowLoading(false);
            if (response) {
                this.props.userLogin('Edo')
            }
        } catch (e) {
            this.props.onShowError(e.message);
        }

    }

    render() {
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
                            <div className='login-button' onClick={this.handleLogin}>Login</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LoginView.contextType = DepContext
// cara singkat
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapDispatchToProps = {
    userLogin,
}
export default connect(null, mapDispatchToProps)(withUiState(LoginView));