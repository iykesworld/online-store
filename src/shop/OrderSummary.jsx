import React from 'react'
import './Shop.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store'
import { clearCart } from '../redux/feature/cart/cartSlice'
import { Link } from 'react-router-dom'

const OrderSummary = () => {
    const dispatch =useDispatch()
    const products = useSelector((store)=> store.cart.products);
    const {tax, taxRate, grandTotal, totalPrice, selectedItems} = useSelector((store)=> store.cart);
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

  return (
    <div className='order-summary'>
        <div>
            <h2>Order Summary</h2>
            <p>Selected Items: {selectedItems}</p>
            <p>Total Price ${totalPrice.toFixed(2)}</p>
            <p>Tax ({taxRate * 100}%); ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <div className='order-summary-button'>
                <button className='order-button-one' 
                onClick={(e)=> {
                    e.stopPropagation();
                    handleClearCart();
                }}><span>Clear Cart</span><i className="ri-delete-bin-6-line cartmodal-icon"></i></button>
                <Link to="/login" className='order-button-two'><span>Proceed to Check out</span><i className="ri-bank-card-line cartmodal-icon"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary