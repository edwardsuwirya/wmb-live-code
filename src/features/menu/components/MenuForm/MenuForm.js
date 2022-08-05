import {Component} from "react";
import '../../../../App.css';
import './MenuForm.css';
import MenuList from "../MenuList/MenuList";
import {DepContext} from "../../../../depContext";
import {connect} from "react-redux";
import {menuAction} from "../../state/MenuAction";
import UIState from "../../../../shared/uistate/UIState";
import MessageBox from "../../../../shared/components/messageBox/MessageBox";

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                id: '',
                menuName: '',
                price: 0,
                category: 'food'
            }, error: {
                errorid: null,
                errormenuName: null,
                errorprice: null
            },
            isValidForm: false,
            isShowingForm: false,
            currentMenus: []
        }
    }

    handleShowForm = (isShowing) => {
        this.setState({
            isShowingForm: isShowing
        })
    }
    onGetMenu = async () => {
        await this.props.menuAction(() => this.context.menuService.getMenu());
        this.setState({
            currentMenus: [...this.props.uiState.data]
        })
    }

    componentDidMount() {
        this.onGetMenu();
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
        console.log(key, val)
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
    handleAddMenu = async () => {
        await this.props.menuAction(() => this.context.menuService.addMenu(this.state.menu));
        this.clearForm();
        await this.onGetMenu();
    }
    handleDeleteMenu = async (id) => {
        const response = window.confirm('Are you sure want to delete ?');
        if (response) {
            await this.props.menuAction(() => this.context.menuService.deleteMenu(id));
            await this.onGetMenu();
        }
    }
    clearForm = () => {
        this.setState({
            menu: {
                id: '',
                menuName: '',
                price: 0,
                category: 'food'
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
            <UIState>
                <MenuList data={this.state.currentMenus} onDeleteMenu={this.handleDeleteMenu}
                          onShowingForm={this.handleShowForm}/>
                {this.state.isShowingForm &&
                    <div className='menu-form-container'>
                        <div className='menu-form-input-container'>
                            <div className='menu-form-header'>
                                <h2>Menu Form</h2>
                                <button onClick={() => this.handleShowForm(false)}>X</button>
                            </div>
                            <label>Id</label>
                            <input className='menu-form-input' name='id' type='text' value={id}
                                   onChange={this.handleInputChange}/>
                            {errorid && <div className='form-input-error'><small>{errorid}</small></div>}
                            <br/>
                            <label>Menu Name</label>
                            <input className='menu-form-input' name='menuName' type='text' value={menuName}
                                   onChange={this.handleInputChange}/>
                            {errormenuName &&
                                <div className='form-input-error'><small>{errormenuName}</small></div>}
                            <br/>
                            <label>Price</label>
                            <input className='menu-form-input' name='price' type='text' value={price}
                                   onChange={this.handleInputChange}/>
                            {errorprice && <div className='form-input-error'><small>{errorprice}</small></div>}
                            <br/>
                            <label>Category</label>
                            <select className='menu-form-input' name="category" onChange={this.handleInputChange}>
                                <option value='food'>Food</option>
                                <option value='beverage'>Beverage</option>
                            </select>
                            <br/>
                            <button disabled={!isValidForm} onClick={this.handleAddMenu}>Add</button>
                        </div>
                    </div>
                }
                {this.props.uiState.error && <MessageBox title={this.props.uiState.error}/>}
            </UIState>

        )
    }
}

MenuForm.contextType = DepContext
const mapStateToProps = state => {
    return {
        uiState: state.UIReducer
    }
}
const mapDispatchToProps = {
    menuAction
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuForm);