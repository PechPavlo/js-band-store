import React from 'react';
import { useDispatch } from 'react-redux';
import { closePurchaseModal } from '../../redux/actions';
import CartTable from '../CartTable/CartTable';
import './Purchase.scss';

const Purchase = () => {
  const dispatch = useDispatch();
  const handleClose = (event) => {
    if (event.target.id === 'purchase-wrapper' || event.target.id === 'purchase_close-button') {
      dispatch(closePurchaseModal());
    }
  };

  return (
    <div
      id="purchase-wrapper"
      role="button"
      tabIndex="0"
      className="purchase-container"
      onClick={handleClose}
      onKeyPress={handleClose}
    >
      <div className="purchase">
        <p>You successfully placed an order!</p>
        <CartTable />
        <div className="purchase-controls">
          <button
            id="purchase_close-button"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
