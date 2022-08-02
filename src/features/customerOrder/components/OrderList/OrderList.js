import {clearOrder} from "../../state/CustomerOrderAction";
import {connect} from "react-redux";
import {Component} from "react";
import './OrderList.css';

class OrderList extends Component {
    handleClearOrder = () => {
        this.props.clearOrder();
    }

    componentWillUnmount() {
        this.handleClearOrder();
    }

    render() {
        return (
            <>
                {
                    this.props.order.orderItems.map((o,idx) => {
                        return (
                            <div key={idx} className='order-item'>
                                <div>{o.qty} {o.menu.menuName}</div>
                                <div>{o.menu.price * o.qty}</div>
                            </div>)
                    })
                }
                {this.props.order.orderItems.length > 0 ? <>
                    <div
                        className='order-total'>
                        <div>Total</div>
                        {this.props.order.total}
                    </div>
                    <br/>
                    <div className='order-action'>Order</div>
                    <div className='cancel-action' onClick={this.handleClearOrder}>Cancel</div>
                </> : <p>No Items</p>}
            </>
        )
    }
}

const mapDispatchToProps = {
    clearOrder
}
const mapStateToProps = state => {
    return {
        order: state.orderReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderList);