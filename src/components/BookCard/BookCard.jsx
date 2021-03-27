/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBookDetails } from '../../redux/actions';
import './BookCard.scss';

const BookCard = (props) => {
  const { cardBook } = props;
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <article className="book-card">
      <div className="book-card_image-container">
        <img src={cardBook.cover} alt={`cover of ${cardBook.title}`} />
      </div>
      <div className="book-card-content">
        <h3 className="book-card_title">{`${cardBook.title}`}</h3>
        <p className="book-card_subtitle">{`${cardBook.author}`}</p>
      </div>
      <div className="book-card-footer">
        <span className="book-card_price">{`${cardBook.price}$`}</span>
        <button
          className="book-card_button"
          type="button"
          onClick={() => {
            dispatch(getBookDetails(user.token, cardBook.id));
            history.push(`/js-band-store/catalog/${cardBook.id}`);
          }}
        >
          View
        </button>
      </div>
    </article>
  );
};

export default BookCard;
