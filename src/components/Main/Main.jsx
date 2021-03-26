import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../BookCard/BookCard';
import Cart from '../Cart/Cart';
import BookDetails from '../BookDetails/BookDetails';
import './Main.scss';

const Main = () => {
  const { booksCatalog, book, cart } = useSelector((state) => state);
  const [filteredByPrice, setFilteredByPrice] = useState([]);
  const [filteredBySearch, setFilteredBySearch] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    setFilteredBySearch(booksCatalog.books);
    setFilteredByPrice(booksCatalog.books);
  }, [booksCatalog]);

  useEffect(() => {
    setFilteredBySearch(filteredByPrice);
    setSearchValue('');
  }, [filteredByPrice]);

  const handleSeach = (event) => {
    setSearchValue(event.target.value);
    const title = event.target.value.toLowerCase();
    setFilteredBySearch(
      filteredByPrice.filter((el) => el.title.toLowerCase().includes(title)),
    );
  };

  const handleSeachFocus = () => {
    setSearchValue('');
    setFilteredBySearch(filteredByPrice);
  };

  const handleOnChange = (event) => {
    const range = event.target.value.split(':');
    const min = +range[0];
    const max = +range[1];
    setFilteredByPrice(
      booksCatalog.books.filter((el) => el.price >= min && el.price <= max),
    );
  };

  return (
    <div className="main">
      {!book.isActive && !cart.isActive && (
      <div className="main-controls">
        <label htmlFor="book-seach">
          <input
            list="books-list"
            name="browser"
            id="book-seach"
            placeholder="search"
            value={searchValue}
            onChange={handleSeach}
            onFocus={handleSeachFocus}
          />

          <datalist id="books-list">
            {filteredByPrice.map((cardBook) => (
              <option value={cardBook.title} key={cardBook.id}>
                {' '}
              </option>
            ))}
          </datalist>
        </label>
        <label htmlFor="price-filter">
          <select id="price-filter" onChange={handleOnChange}>
            <option value="0:Infinity ">Price</option>
            <option value="0:25">{'0 < price < 25'}</option>
            <option value="25:50">{'25 < price < 50'}</option>
            <option value="50:Infinity ">{'price > 50'}</option>
          </select>
        </label>
      </div>
      )}
      <div className="main-content">
        {!book.isActive && !cart.isActive && (
          <ul className="book-list">
            {filteredBySearch.map((cardBook) => (
              <li key={cardBook.id}>
                <BookCard cardBook={cardBook} />
              </li>
            ))}
          </ul>
        )}
        {book.isActive && <BookDetails />}
        {cart.isActive && <Cart />}
      </div>
    </div>
  );
};

export default Main;
