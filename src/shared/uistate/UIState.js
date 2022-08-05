import {connect} from "react-redux";
import LoadingBackDrop from "../components/loadingBackDrop/LoadingBackDrop";

function UIState(props) {
    return (
        <>
            {props.uiState.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
            {props.children}
        </>
    )
}

const mapStateToProps = state => {
    return {
        uiState: state.UIReducer
    }

}
export default connect(mapStateToProps)(UIState)
