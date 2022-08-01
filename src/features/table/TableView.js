import {Component} from "react";
import TableForm from "./components/TableForm/TableForm";
import TableList from "./components/TableList/TableList";

class TableView extends Component {
    onUpdateForm = () => {
        this.setState({
            isFormUpdated: true
        })
    }

    render() {
        return (
            <>
                <TableForm handleFormUpdate={this.onUpdateForm}/>
                <TableList/>
            </>
        )
    }
}
export default TableView;