import {Component} from "react";
import LoadingBackDrop from "../components/loadingBackDrop/LoadingBackDrop";

export function withUiState(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false,
                isError: false,
                errMessage: ''
            }
        }

        handleShowLoading = (isShowing) => {
            this.setState({
                isLoading: isShowing
            })
        }

        handleShowError = (errMessage) => {
            this.setState({
                isLoading: false
            })
            alert(`oops...${errMessage}`)
        }

        render() {
            return (
                <>
                    {this.state.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
                    <WrappedComponent onShowLoading={this.handleShowLoading}
                                      onShowError={this.handleShowError} {...this.props}/>
                </>
            )
        }
    }
}