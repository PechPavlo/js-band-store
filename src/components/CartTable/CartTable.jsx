import React from 'react';
import { useSelector } from 'react-redux';
import './CartTable.scss';

const CartTable = () => {
  const { purchase, booksCatalog } = useSelector((state) => state);
  const booksInCartSet = [...new Set([...purchase.books])];
  const getBookDetailsInCart = (id) => {
    const currentBook = booksCatalog.books.find((book) => book.id === id);
    const countInCart = purchase.books.reduce(
      (acc, el) => (el === id ? acc + 1 : acc),
      0,
    );
    const currentPrice = currentBook.price;
    const currentName = currentBook.title;
    const currentTotalPrice = currentPrice * countInCart;
    return {
      currentName,
      countInCart,
      currentPrice,
      currentTotalPrice,
    };
  };
  const getTotalPriceInCart = () => {
    const totalPriceInCart = booksInCartSet.reduce(
      (acc, el) => getBookDetailsInCart(el).currentTotalPrice + acc,
      0,
    );
    return totalPriceInCart;
  };

  return (
    <div className="cart-table">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {booksInCartSet.map((currBook) => (
            <tr key={currBook}>
              <td>{getBookDetailsInCart(currBook).currentName}</td>
              <td>{getBookDetailsInCart(currBook).countInCart}</td>
              <td>{getBookDetailsInCart(currBook).currentPrice}</td>
              <td>{getBookDetailsInCart(currBook).currentTotalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-cart_total-price">
        <p>{`Total Price: ${+getTotalPriceInCart().toFixed(2)} $`}</p>
      </div>
    </div>
  );
};

export default CartTable;
