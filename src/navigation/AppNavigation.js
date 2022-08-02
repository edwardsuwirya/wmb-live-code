import {Component} from "react";
import MenuView from "../features/menu/MenuView";
import TableView from "../features/table/TableView";
import LoginView from "../features/login/LoginView";
import './AppNavigation.css';
import {userLogout} from "../features/login/state/AuthenticationAction";
import {connect} from "react-redux";
import CustomerOrderView from "../features/customerOrder/CustomerOrderView";

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
                                <small className='navigation-subtitle'>Active
                                    User: {this.props.authentication.userName}</small>
                                <div className='navigation-header-menu'>Transaction</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(3)}>Customer
                                    Order
                                </div>
                                <div className='navigation-header-menu'>Master</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(1)}>Menu</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(2)}>Table</div>
                                <button className='navigation-logout' onClick={() => this.props.userLogout()}>Logout
                                </button>
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