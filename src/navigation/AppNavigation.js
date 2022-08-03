import {Component} from "react";
import MenuView from "../features/menu/MenuView";
import TableView from "../features/table/TableView";
import LoginView from "../features/login/LoginView";
import './AppNavigation.css';
import {userLogout} from "../features/login/state/AuthenticationAction";
import {connect} from "react-redux";
import CustomerOrderView from "../features/customerOrder/CustomerOrderView";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlFood, faChair, faKitchenSet, faUser} from "@fortawesome/free-solid-svg-icons";

class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    onNavigate = (page) => {
        this.setState({
            currentPage: page
        })
    }

    render() {
        return (
            <>
                {
                    this.props.authentication.isAuthenticated ?
                        <div className='navigation-container'>
                            <div className='navigation-sidebar'>
                                <span className='navigation-title'>WMB</span>
                                <small className='navigation-subtitle'>version 1.0.0</small>
                                <br/>
                                <small className='navigation-subtitle'><FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp; Active
                                    User: {this.props.authentication.userName}</small>
                                <div className='navigation-header-menu'>Transaction</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(3)}>
                                    <FontAwesomeIcon icon={faBowlFood}/>&nbsp;&nbsp;Customer Order
                                </div>
                                <div className='navigation-header-menu'>Master</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(1)}><FontAwesomeIcon icon={faKitchenSet}/>&nbsp;&nbsp; Menu</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(2)}><FontAwesomeIcon icon={faChair}/>&nbsp;&nbsp; Table</div>
                                <div className='navigation-logout logout-button'
                                     onClick={() => this.props.userLogout()}>Logout
                                </div>
                            </div>
                            <div className='navigation-content'>
                                {this.state.currentPage === 1 && <MenuView/>}
                                {this.state.currentPage === 2 && <TableView/>}
                                {this.state.currentPage === 3 && <CustomerOrderView/>}
                            </div>
                        </div> : <LoginView/>
                }
            </>
        );
    }
}

const mapDispatchToProps = {
    userLogout,
}
const mapStateToProps = state => ({
        authentication: state.authenticationReducer
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);