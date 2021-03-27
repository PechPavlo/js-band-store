import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetError } from '../../redux/actions';
import './NotFound.scss';

const NotFound = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state);
  const history = useHistory();
  const handleClose = (event) => {
    if (event.target.id === 'not-found-wrapper' || event.target.id === 'not-found_close-button') {
      dispatch(resetError());
      history.push('/js-band-store/catalog');
    }
  };

  return (
    <div
      id="not-found-wrapper"
      role="button"
      tabIndex="0"
      className="not-found-container"
      onClick={handleClose}
      onKeyPress={handleClose}
    >
      <div className="not-found">
        <h2>{error ? 'We have an error!!!' : 'Page Not Found'}</h2>
        <h2>{error}</h2>
        <div className="not-found-controls">
          <button
            id="not-found_close-button"
            type="button"
          >
            Go To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
