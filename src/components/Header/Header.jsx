import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../redux/actions';
import './Header.scss';
import cartIcon from '../../assets/image/icon/shopping-cart.svg';

const Header = () => {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const handleSignOut = () => {
    dispatch(signOut());
    localStorage.removeItem('pechPavloBookStore');
  };

  return (
    <div className="header">
      <div className="header-authorization">
        <h4 className="user-name">{user.userName}</h4>
        <button type="button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <hr />
      <div className="header-cart">
        <NavLink activeClassName="nav_link-active" className="to-main-button" to="/js-band-store/catalog">
          <h1>JS Band Store</h1>
        </NavLink>
        <NavLink activeClassName="nav_link-active" className="cart-button" to="/js-band-store/cart">
          {' '}
          <img src={cartIcon} className="shopping-cart" alt="shopping-cart" />
          Cart (
          {cart.books.length}
          )
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default Header;
