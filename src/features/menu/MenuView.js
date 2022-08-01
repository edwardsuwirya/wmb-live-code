import {Component} from "react";
import MenuForm from "./components/MenuForm/MenuForm";

class MenuView extends Component {
    onUpdateForm = () => {
        this.setState({
            isFormUpdated: true
        })
    }

    render() {
        return (
            <>
                <MenuForm handleFormUpdate={this.onUpdateForm}/>
            </>
        )
    }
}
export default MenuView;