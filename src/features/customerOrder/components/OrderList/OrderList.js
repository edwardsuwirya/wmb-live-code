import {clearOrder} from "../../state/CustomerOrderAction";
import {connect} from "react-redux";
import {Component} from "react";
import './OrderList.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBeerMugEmpty} from "@fortawesome/free-solid-svg-icons";

class OrderList extends Component {
    handleClearOrder = () => {
        this.props.clearOrder();
    }

    componentWillUnmount() {
        this.handleClearOrder();
    }

    render() {
        return (
            <div>
                {
                    this.props.order.orderItems.map((o, idx) => {
                        return (
                            <div key={idx} className='order-item app-color'>
                                <div>{o.qty} {o.menu.menuName}</div>
                                <div>{o.menu.price * o.qty}</div>
                            </div>)
                    })
                }
                {this.props.order.orderItems.length > 0 ? <>
                    <div
                        className='order-total app-color'>
                        <div>Total</div>
                        {this.props.order.total}
                    </div>
                    <br/>
                    <div className='order-action app-color'>Order</div>
                    <div className='cancel-action app-color' onClick={this.handleClearOrder}>Cancel</div>
                </> : <div className='order-list-empty'>
                    <FontAwesomeIcon icon={faBeerMugEmpty}/>
                    <div>No Items</div>
                </div>}
            </div>
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