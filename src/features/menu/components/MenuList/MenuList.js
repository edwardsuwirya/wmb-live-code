import {Component} from "react";
import './MenuList.css';
import {withUiState} from "../../../../shared/hoc/WithUiState";

class MenuList extends Component {
    render() {
        return (
            <div className='menu-list-table'>
                <h2>Menu List</h2>
                <button onClick={() => {
                    this.props.onShowingForm(true)
                }}>Add menu
                </button>
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
                            <td>
                                <button onClick={() => this.props.onDeleteMenu(menu.id)}>Delete</button>
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

export default withUiState(MenuList);