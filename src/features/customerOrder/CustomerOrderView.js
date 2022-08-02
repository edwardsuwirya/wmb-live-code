import './CustomerOrderView.css';
import OrderList from "./components/OrderList/OrderList";
import OrderMenu from "./components/OrderMenu/OrderMenu";

function CustomerOrderView() {
    return (
        <div className='order-container'>
            <div className='order-list-container'>
                <OrderList/>
            </div>
            <div className='order-menu-list-container'>
                <OrderMenu/>
            </div>
        </div>
    )
}

export default CustomerOrderView;