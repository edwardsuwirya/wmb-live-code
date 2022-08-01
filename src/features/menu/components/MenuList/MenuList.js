import {Component} from "react";
import {menus} from "../../../../data";
import './MenuList.css';

class MenuList extends Component {
    onDelete = (id) => {
        const response = window.confirm('Are you sure want to delete ?')
        if (response) {
            const index = menus.findIndex(menu => menu.id === id);
            menus.splice(index, 1);
            this.setState({})
        }
    }

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
                    {menus.map((menu) => (
                        <tr key={menu.id}>
                            <td>{menu.menuName}</td>
                            <td>{menu.price}</td>
                            <td>
                                <button onClick={() => this.onDelete(menu.id)}>Delete</button>
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

export default MenuList;