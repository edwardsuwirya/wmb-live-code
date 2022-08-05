import './MessageBox.css';
import {Component} from "react";
import {menuAction} from "../../../features/menu/state/MenuAction";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons";

class MessageBox extends Component {
    render() {
        return (
            <div className='messagebox-container'>
                <div className='messagebox-content'>
                    <div className='messagebox-close' onClick={this.props.closeAction}>
                        <FontAwesomeIcon icon={faSquareXmark}/>
                    </div>
                    {this.props.title}

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uiState: state.UIReducer
    }
}
const mapDispatchToProps = {
    menuAction,
    closeAction: () => (
        {type: 'finish'}
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);