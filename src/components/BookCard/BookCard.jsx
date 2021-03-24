/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import './BookCard.scss';

const BookCard = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <article className="book-card">
      <div className="book-card_image-container">
        <img src={book.cover} alt={`cover of ${book.title}`} />
      </div>
      <div className="book-card-content">
        <h3 className="book-card_title">{`${book.title}`}</h3>
        <p className="book-card_subtitle">{`${book.author}`}</p>
      </div>
      <div className="book-card-footer">
        <span className="book-card_price">{`${book.price}$`}</span>
        <button
          className="book-card_button"
          type="button"
          onClick={() => {
            console.log('book view');
          }}
        >
          View
        </button>
      </div>
    </article>
  );
};

export default BookCard;
