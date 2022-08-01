import {Component} from "react";
import {tables} from "../../../../data";
import '../../../../App.css';

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {
                id: '',
                tableNumber: '',
                status: 'U'
            },
            error: {
                errorid: null,
                errortableNumber: null
            },
            isValidForm: false
        }
    }

    componentDidMount() {
        console.log('table form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('table form update')
    }

    handleValidation = (key, value) => {
        let isValid;
        if (value === '') {
            this.setState({
                error: {...this.state.error, [`error${key}`]: 'field is required'}
            })
            isValid = false
        } else {
            this.setState({
                error: {...this.state.error, [`error${key}`]: ''}
            })
            isValid = true
        }
        this.handleFormValidation()
        return isValid
    }

    handleFormValidation = () => {
        this.setState((prevState) => {
            if (prevState.error.errorid === '' && prevState.error.errortableNumber === '') {
                return {isValidForm: true}
            } else {
                return {isValidForm: false}
            }
        })
    }
    handleInputChange = (e) => {
        const key = e.target.name;
        const val = e.target.value;
        this.setState({
            table: {
                ...this.state.table, [key]: val
            }
        })
        this.handleValidation(key, val)
    }

    handleAddTable = () => {
        tables.push({...this.state.table});
        console.log(tables);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            table: {
                id: '',
                tableNumber: '',
                status: 'U'
            },
            error: {
                errorid: null,
                errortableNumber: null
            },
            isValidForm: false
        })
    }

    render() {
        const {table: {id, tableNumber, status}, error: {errorid, errortableNumber}, isValidForm} = this.state
        return (
            <>
                <h2>Table Form</h2>
                <label>id</label>
                <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                <br/>
                <label>Table Number</label>
                <input name='tableNumber' type='text' value={tableNumber} onChange={this.handleInputChange}/>
                {errortableNumber && <div className='form-input-error'><small>{errortableNumber}</small></div>}
                <br/>
                <label>Status</label>
                <input type='radio' name='status' value='A' onChange={this.handleInputChange} checked={status === 'A'}/>
                <label>Available</label>
                <input type='radio' name='status' value='U' onChange={this.handleInputChange} checked={status === 'U'}/>
                <label>Unavailable</label>
                <br/>
                <button disabled={!isValidForm} onClick={this.handleAddTable}>Add</button>
            </>
        )
    }
}

export default TableForm;