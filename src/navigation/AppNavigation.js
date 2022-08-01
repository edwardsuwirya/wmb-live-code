import {Component} from "react";
import MenuView from "../features/menu/MenuView";
import TableView from "../features/table/TableView";
import LoginView from "../features/login/LoginView";
import './AppNavigation.css';

class AppNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            currentPage: 0
        }
    }

    onNavigate = (page) => {
        this.setState({
            currentPage: page
        })
    }
    onLoggedIn = (status) => {
        this.setState({
            isAuthenticated: status
        })
    }


    render() {
        const {isAuthenticated} = this.state;
        return (
            <>
                {
                    isAuthenticated ?
                        <div className='navigation-container'>
                            <div className='navigation-sidebar'>
                                <span className='navigation-title'>WMB</span>
                                <small className='navigation-subtitle'>version 1.0.0</small>
                                <div className='navigation-header-menu'>Master</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(1)}>Menu</div>
                                <div className='navigation-menu-item' onClick={() => this.onNavigate(2)}>Table</div>
                                <button className='navigation-logout' onClick={() => this.onLoggedIn(false)}>Logout</button>
                            </div>
                            <div className='navigation-content'>
                                {this.state.currentPage === 1 && <MenuView/>}
                                {this.state.currentPage === 2 && <TableView/>}

                            </div>
                        </div> : <LoginView handleLoggedIn={this.onLoggedIn}/>
                }
            </>
        );
    }
}

export default AppNavigation;