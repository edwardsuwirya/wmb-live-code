import {Component} from "react";
import OrderQty from "../OrderQty/OrderQty";
import {addFBMenu} from "../../../menu/state/MenuAction";
import {addOrder} from "../../state/CustomerOrderAction";
import {connect} from "react-redux";
import {withUiState} from "../../../../shared/hoc/WithUiState";
import MenuService from "../../../../services/MenuService";
import './OrderMenu.css';

class OrderMenu extends Component {
    constructor(props) {
        super(props);
        this.service = MenuService();
        this.state = {
            menuList: [],
            isShowingQty: false,
            menuSelected: {}
        }
    }

    onGetMenus = async () => {
        this.props.onShowLoading(true)
        try {
            const foods = await this.service.getMenuByCategory('food');
            const beverages = await this.service.getMenuByCategory('beverage');
            this.props.addFBMenu(foods, beverages);
            this.props.onShowLoading(false);
        } catch (e) {
            this.props.onShowError(e.message);
        }
    }

    componentDidMount() {
        this.onGetMenus();
    }

    handleGetFoodMenu = (category) => {
        if (category === 'food') {
            this.setState({
                menuList: this.props.menus.foods
            })

        }
        if (category === 'beverage') {
            this.setState({
                menuList: this.props.menus.beverages
            })
        }
    }
    handleShowingQty = (menu) => {
        this.setState({
            isShowingQty: !this.state.isShowingQty,
            menuSelected: menu
        })
    }
    handleAddOrder = (qty) => {
        this.props.addOrder(this.state.menuSelected, qty);
        this.setState({
            isShowingQty: false
        })
    }

    render() {
        return (
            <>
                <div className='menu-item-container'>
                    <div className='menu-item menu-header' onClick={() => this.handleGetFoodMenu('food')}>Food</div>
                    <div className='menu-item menu-header' onClick={() => this.handleGetFoodMenu('beverage')}>Bev
                    </div>
                </div>
                <div style={{borderBottom:'3px solid gainsboro',margin:'8px'}}></div>
                <div className='menu-item-container'>
                    {
                        this.state.menuList.map((f) => {
                            return (<div className='menu-item' onClick={() => this.handleShowingQty(f)}
                                         key={f.id}>{f.menuName}</div>)
                        })
                    }
                </div>
                {this.state.isShowingQty && <OrderQty onAddOrder={this.handleAddOrder} onCancel={this.handleShowingQty}/>}
            </>
        )
    }
}

const mapDispatchToProps = {
    addFBMenu, addOrder
}
const mapStateToProps = state => {
    return {
        menus: state.menuReducer,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withUiState(OrderMenu));