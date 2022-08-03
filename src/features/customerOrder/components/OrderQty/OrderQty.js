import './OrderQty.css';
import * as PropTypes from "prop-types";
import {Component} from "react";

class OrderQty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        };
    }

    handleChangeQty = (e) => {
        const qty = e.target.value;
        if (qty > 0) {
            this.setState({qty: e.target.value})
        } else {
            this.setState({qty: 1})
        }
    }

    handleAddOrder = () => {
        this.props.onAddOrder(this.state.qty)
    }

    render() {
        return (
            <div className='order-qty-container'>
                <div className='order-qty-content'>
                    <div className='order-qty'>
                        <label>Qty </label>
                        <input className='order-qty-form-input' type='number' value={this.state.qty} onChange={this.handleChangeQty}/>
                    </div>
                    <div className='order-qty-button-group'>
                        <button style={{flexGrow:1}} onClick={this.handleAddOrder}>Add</button>
                        <button style={{flexGrow:1}} onClick={() => this.props.onCancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

OrderQty.propTypes = {title: PropTypes.any}
export default OrderQty;
