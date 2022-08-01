import {Component} from "react";
import {tables} from "../../../../data";

class TableList extends Component {
    onDelete = (id) => {
        const response = window.confirm('Are you sure want to delete ?')
        if (response) {
            const index = tables.findIndex(menu => menu.id === id);
            tables.splice(index, 1);
            this.setState({})
        }
    }

    render() {
        return (
            <>
                <h2>Table List</h2>
                <ul>
                    {tables.map((table) => (
                        <li key={table.id}>{table.tableNumber} {table.status}
                            <button onClick={() => this.onDelete(table.id)}>Delete</button>
                        </li>
                    ))
                    }
                </ul>
            </>
        )
    }
}

export default TableList;