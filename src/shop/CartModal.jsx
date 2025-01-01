import React from "react";
import "./Shop.css";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../redux/feature/cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const handleQuantity = (type, id) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({ id }));
  };
  return (
    <div className={isOpen ? "cartmodal" : "cartmodal-inactive"}>
      <div className="cartmodal-wrapper">
        <div className="cartmodal-header">
          <h4>Your Cart</h4>
          <button onClick={() => onClose()}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="cartmodal-hero">
          {products.length === 0 ? (
            <div className="Your-cart-empty">Your Cart is Empty</div>
          ) : (
            <div className="cartmodal-container">
              {products.map((item, index) => {
                return (
                  <div className="cartmodal-up" key={index}>
                    <div className="cartmodal-top-info">
                      <div className="cartmodal-count">
                        <span>0{index + 1}</span>
                      </div>
                      <div className="cartmodal-top-details">
                        <div className="cartmodal-image-wrapper">
                          <img src={item.image} alt="product image" />
                        </div>
                        <div>
                          <h5>{item.name}</h5>
                          <p>${Number(item.price).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="cartmodal-increment">
                        <button
                          onClick={() => handleQuantity("decrement", item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantity("increment", item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="cartmodal-button-remove">
                        <button onClick={(e) => handleRemove(e, item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="cartmordal-details">
                {products.length > 0 && <OrderSummary />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
