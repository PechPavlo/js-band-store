import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizeUser } from '../../redux/actions';
import defaultUser from '../../assets/image/default-avatar.jpg';
import './LoginPage.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const haldleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 3 && inputValue.trim().length < 17) {
      dispatch(authorizeUser(inputValue.trim()));
      setInputValue('');
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  };
  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <img src={defaultUser} className="default-user" alt="defaul user" />
        <h2>JS Band Store</h2>
        <form id="authorization" onSubmit={haldleFormSubmit}>
          <label htmlFor="name-input">
            Name
            <input
              id="name-input"
              placeholder="Name"
              type="text"
              required
              value={inputValue}
              onChange={(event) => {
                setIsNameValid(true);
                setInputValue(event.target.value);
              }}
            />
            {!isNameValid && (
            <span className="name-error">Username is not valid</span>
            )}
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
