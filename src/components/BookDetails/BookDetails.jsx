import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { addToCart, getBookDetails } from '../../redux/actions';
import tagsIcon from '../../assets/image/icon/tags.svg';
import './BookDetails.scss';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book, user, cart } = useSelector((state) => state);
  const isDataValid = book.details?.id === id;

  useEffect(() => {
    if (!isDataValid) {
      dispatch(getBookDetails(user.token, id));
    }
  }, [book]);

  if (!isDataValid) {
    return (
      <div>
        <p>Loading ...</p>
        <span className="loading-ring" />
      </div>
    );
  }

  const [bookCount, setBookCount] = useState('1');
  const [overCountMessage, setOverCountMessage] = useState('');
  const booksInCart = cart.books.reduce(
    (acc, el) => (el === `${id}` ? acc + 1 : acc),
    0,
  );
  const maxBookCount = book.details.count - booksInCart;
  const booksToAdd = Array(+bookCount).fill(`${id}`);
  const tags = book.details.tags
    .map((tag) => tag[0].toUpperCase() + tag.slice(1))
    .join(', ');

  const handlerCountChange = (event) => {
    if (event.target.value <= maxBookCount) {
      setBookCount(event.target.value);
      setOverCountMessage('');
    } else {
      setOverCountMessage(`-   max limit ${maxBookCount}`);
    }
  };

  return (
    <div className="book-details-container">
      <div className="book-details">
        <div className="book-details_image-container">
          <img
            src={book.details.cover}
            alt={`cover of ${book.details.title}`}
          />
          <span className="book-details_description">
            {book.details.description}
          </span>
        </div>
        <div className="book-details-content">
          <h3 className="book-details_title">{`${book.details.title}`}</h3>
          <p className="book-details_subtitle">{`${book.details.author}`}</p>
          <div className="book-details_tags-container">
            <img src={tagsIcon} alt={`tags of ${book.details.title}`} />
            <p className="book-details_tags">{`${tags}`}</p>
          </div>
        </div>
      </div>
      <div className="book-details-cart-container">
        <div className="book-details-cart">
          <div className="book-details-cart_price">
            <p>Price, $</p>
            <p>{book.details.price}</p>
          </div>
          <label className="book-count-label" htmlFor="book-count">
            {`Count    ${overCountMessage}`}
            <input
              type="number"
              id="book-count"
              name="book-count"
              min="1"
              max={maxBookCount}
              value={+bookCount}
              onChange={handlerCountChange}
            />
          </label>
          <div className="book-details-cart_total-price">
            <p>Total Price, $</p>
            <p>{+(book.details.price * bookCount).toFixed(2)}</p>
          </div>
          <div className="book-details-cart_footer">
            <NavLink
              activeClassName="nav_link-active"
              className="book-details_cart-button"
              to="/js-band-store/cart"
              onClick={() => {
                dispatch(addToCart(booksToAdd));
              }}
            >
              Add To Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
