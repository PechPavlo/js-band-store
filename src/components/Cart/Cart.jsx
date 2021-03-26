import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirectToMain, purchaseBooks } from '../../redux/actions';
import CartTable from '../CartTable/CartTable';
import './Cart.scss';

const Cart = () => {
  const { cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-controls">
          <button
            className="cart_to-catalog_button"
            type="button"
            onClick={() => {
              dispatch(redirectToMain());
            }}
          >
            Back To Catalog
          </button>
          <button
            className="cart_purchase-button"
            type="button"
            onClick={() => {
              dispatch(purchaseBooks(user.token, cart.books));
            }}
          >
            Purchase
          </button>
        </div>
        <CartTable />
      </div>
    </div>
  );
};

export default Cart;
