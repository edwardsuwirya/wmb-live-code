import {Component} from "react";
import {menus} from "../../../../data";
import '../../../../App.css';
import './MenuForm.css';
import MenuList from "../MenuList/MenuList";

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                id: '',
                menuName: '',
                price: 0
            }, error: {
                errorid: null,
                errormenuName: null,
                errorprice: null
            },
            isValidForm: false,
            isShowingForm: false
        }
    }

    handleShowForm = (isShowing) => {
        this.setState({
            isShowingForm: isShowing
        })
    }

    componentDidMount() {
        console.log('menu form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('menu form update')
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
            if (prevState.error.errorid === '' && prevState.error.errormenuName === '' && prevState.error.errorprice === '') {
                return {isValidForm: true}
            } else {
                return {isValidForm: false}
            }
        })
    }
    handleInputChange = (e) => {
        const key = e.target.name;
        let val = e.target.value;
        if (key === 'price') {
            val = Number(val.replace(/\D/, ''))
        }
        this.setState({
            menu: {
                ...this.state.menu, [key]: val
            }
        })
        this.handleValidation(key, val)
    }
    handleAddMenu = () => {
        menus.push({...this.state.menu});
        console.log(menus);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            menu: {
                id: '',
                menuName: '',
                price: 0
            }, error: {
                errorid: null,
                errormenuName: null,
                errorprice: null
            },
            isValidForm: false,
            isShowingForm: false
        })
    }

    render() {
        const {menu: {id, menuName, price}, error: {errorid, errormenuName, errorprice}, isValidForm} = this.state
        return (
            <>
                <MenuList onShowingForm={this.handleShowForm}/>
                {this.state.isShowingForm &&
                    <div className='menu-form-container'>
                        <div className='menu-form-input-container'>
                            <div className='menu-form-header'>
                                <h2>Menu Form</h2>
                                <button onClick={() => this.handleShowForm(false)}>X</button>
                            </div>
                            <label>id</label>
                            <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                            {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                            <br/>
                            <label>Menu Name</label>
                            <input name='menuName' type='text' value={menuName} onChange={this.handleInputChange}/>
                            {errormenuName && <div className='form-input-error'><small>{errormenuName}</small></div>}
                            <br/>
                            <label>Price</label>
                            <input name='price' type='text' value={price} onChange={this.handleInputChange}/>
                            {errorprice && <div className='form-input-error'><small>{errorprice}</small></div>}
                            <br/>
                            <button disabled={!isValidForm} onClick={this.handleAddMenu}>Add</button>
                        </div>
                    </div>
                }
            </>

        )
    }
}

export default MenuForm;