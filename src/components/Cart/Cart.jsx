import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirectToMain, purchaseBooks } from '../../redux/actions';
import CartTable from '../CartTable/CartTable';
import Purchase from '../Purchase/Purchase';
import cartIcon from '../../assets/image/icon/shopping-cart.svg';
import './Cart.scss';

const Cart = () => {
  const { cart, user, purchase } = useSelector((state) => state);
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
            disabled={!cart.books.length}
            onClick={() => {
              dispatch(purchaseBooks(user.token, cart.books));
            }}
          >
            Purchase
          </button>
        </div>
        {!!cart.books.length && <CartTable />}
        {!cart.books.length && (
          <div className="empty-cart">
            <img src={cartIcon} alt="shopping-cart" />
            <p>Cart empty...</p>
          </div>
        )}
        {purchase.isActive && <Purchase />}
      </div>
    </div>
  );
};

export default Cart;
