import './App.css';
import {Component} from "react";

const menus = [
    {
        id: '1',
        menuName: 'nasi goreng',
        price: 15000
    },
    {
        id: '2',
        menuName: 'ayam bakar',
        price: 25000
    }
]
const tables = [
    {
        id: '1',
        tableNumber: '001',
        status: 'A'
    },
    {
        id: '2',
        tableNumber: '002',
        status: 'u'
    },
    {
        id: '3',
        tableNumber: '003',
        status: 'A'
    }
]

class MenuForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            menuName: '',
            price: 0
        }
    }
    componentDidMount() {
        console.log('menu form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('menu form update')
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddMenu = () => {
        menus.push({...this.state});
        console.log(menus);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            id: '',
            menuName: '',
            price: 0
        })
    }
    render() {
        const {id, menuName, price} = this.state
        return (
            <>
                <h2>Menu Form</h2>
                <label>id</label>
                <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                <label>Menu Name</label>
                <input name='menuName' type='text' value={menuName} onChange={this.handleInputChange}/>
                <label>Price</label>
                <input name='price' type='text' value={price} onChange={this.handleInputChange}/>
                <button onClick={this.handleAddMenu}>Add</button>
            </>
        )
    }
}

function MenuList() {
    return (
        <>
            <h2>Menu List</h2>
            <ul>
                {menus.map((menu) => (
                    <li key={menu.id}>{menu.menuName} {menu.price}</li>
                ))
                }
            </ul>
        </>
    )

}

class TableForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            tableNumber: '',
            status: 'U'
        }
    }

    componentDidMount() {
        console.log('table form mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('table form update')
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddTable = () => {
        tables.push({...this.state});
        console.log(tables);
        this.clearForm();
        this.props.handleFormUpdate();
    }
    clearForm = () => {
        this.setState({
            id: '',
            tableNumber: '',
            status: 'U'
        })
    }

    render() {
        const {id, tableNumber, status} = this.state
        return (
            <>
                <h2>Table Form</h2>
                <label>id</label>
                <input name='id' type='text' value={id} onChange={this.handleInputChange}/>
                <label>Table Number</label>
                <input name='tableNumber' type='text' value={tableNumber} onChange={this.handleInputChange}/>
                <label>Status</label>
                <input name='status' type='text' value={status} onChange={this.handleInputChange}/>
                <button onClick={this.handleAddTable}>Add</button>
            </>
        )
    }
}

function TableList() {
    return (
        <>
            <h2>Table List</h2>
            <ul>
                {tables.map((table) => (
                    <li key={table.id}>{table.tableNumber} {table.status}</li>
                ))
                }
            </ul>
        </>
    )
}

function Login(props) {
    return (
        <>
            <h2>WMB Login</h2>
            <button onClick={() => {
                props.handleLoggedIn(true)
            }}>Login
            </button>
        </>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true,
            isFormUpdate: false
        }
    }

    onLoggedIn = (status) => {
        this.setState({
            isAuthenticated: status
        })
    }

    onUpdateForm = () => {
        this.setState({
            isFormUpdated: true
        })
    }

    render() {
        const {isAuthenticated} = this.state;
        return (
            <>
                {
                    isAuthenticated ?
                        <>
                            <MenuForm handleFormUpdate={this.onUpdateForm}/>
                            <MenuList/>
                            <TableForm handleFormUpdate={this.onUpdateForm}/>
                            <TableList/>
                            <button onClick={() => this.onLoggedIn(false)}>Logout</button>
                        </> : <Login handleLoggedIn={this.onLoggedIn}/>
                }
            </>
        );
    }
}

export default App;
