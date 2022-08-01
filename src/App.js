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
                <br/>
                <label>Menu Name</label>
                <input name='menuName' type='text' value={menuName} onChange={this.handleInputChange}/>
                <br/>
                <label>Price</label>
                <input name='price' type='text' value={price} onChange={this.handleInputChange}/>
                <br/>
                <button onClick={this.handleAddMenu}>Add</button>
            </>
        )
    }
}

class MenuList extends Component {
    onDelete = (id) => {
        const response = window.confirm('Are you sure want to delete ?')
        if (response) {
            const index = menus.findIndex(menu => menu.id === id);
            menus.splice(index, 1);
            this.setState({})
        }
    }

    render() {
        return (
            <>
                <h2>Menu List</h2>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.id}>
                            {menu.menuName} {menu.price}
                            <button onClick={() => this.onDelete(menu.id)}>Delete</button>
                        </li>
                    ))
                    }
                </ul>
            </>
        )

    }
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
                <br/>
                <label>Table Number</label>
                <input name='tableNumber' type='text' value={tableNumber} onChange={this.handleInputChange}/>
                <br/>
                <label>Status</label>
                <input type='radio' name='status' value='A' onChange={this.handleInputChange} checked={status === 'A'}/>
                <label>Available</label>
                <input type='radio' name='status' value='U' onChange={this.handleInputChange} checked={status === 'U'}/>
                <label>Unavailable</label>
                <br/>
                <button onClick={this.handleAddTable}>Add</button>
            </>
        )
    }
}

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
