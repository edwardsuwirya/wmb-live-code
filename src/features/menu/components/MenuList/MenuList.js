import {Component} from "react";
import './MenuList.css';
import {withUiState} from "../../../../shared/hoc/WithUiState";
import {withDep} from "../../../../shared/hoc/WIthDep";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faTrash} from "@fortawesome/free-solid-svg-icons";

class MenuList extends Component {
    render() {
        return (
            <div className='menu-list-table'>
                <div className='menu-list-header menu-list-color'>Menu List</div>
                <div className='menu-list-action' onClick={() => {
                    this.props.onShowingForm(true)
                }}><FontAwesomeIcon icon={faAdd}/>&nbsp;&nbsp;Add menu
                </div>
                <table width='100%'>
                    <thead>
                    <tr className='menu-list-table-header'>
                        <th className='menu-list-table-header-title'>Menu</th>
                        <th className='menu-list-table-header-title'>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.map((menu) => (
                        <tr key={menu.id}>
                            <td>{menu.menuName}</td>
                            <td>{menu.price}</td>
                            <td align='center'>
                                <div onClick={() => this.props.onDeleteMenu(menu.id)}>
                                    <FontAwesomeIcon className='menu-list-color' icon={faTrash}/>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
            </div>
        )

    }
}

export default withDep(withUiState(MenuList), ['MenuService']);