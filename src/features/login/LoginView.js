import './LoginView.css';
import {authenticationAction} from "./state/AuthenticationAction";
import {connect} from "react-redux";
import {Component} from "react";
import {DepContext} from "../../depContext";
import UIState from "../../shared/uistate/UIState";

class LoginView extends Component {
    handleLogin = () => {
        this.props.authenticationAction(() => this.context.authenticationService.Authenticate({}))
    }

    render() {
        return (
            <UIState>
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
                                {this.props.uiState.error && <div>{this.props.uiState.error}</div>}
                            </div>

                        </div>
                    </div>
                </div>
            </UIState>
        )
    }
}

LoginView.contextType = DepContext
// cara singkat
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object
const mapStateToProps = state => {
    return {
        uiState: state.UIReducer
    }
}
const mapDispatchToProps = {
    authenticationAction
}
// export default connect(null, mapDispatchToProps)(withUiState(LoginView));
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);