import {
  getBookDetailsSuccess,
  purchaseBooksSuccess,
  getBooksCatalogSuccess,
  addToCart,
  authorizeUserFailure,
  authorizeUserSuccess,
  authorizeUserStarted,
  getBooksCatalogStarted,
  getBookDetailsStarted,
  purchaseBooksStarted,
  resetError,
  closePurchaseModal,
  signOut,
  getBooksCatalogFailure,
  getBookDetailsFailure,
  purchaseBooksFailure,
} from '../redux/actions';

describe('authorizeUserSuccess', () => {
  it('should create an action authorizeUserSuccess', () => {
    const user = {
      userName: 'Alex',
      token: 'title',
      avatar: '15',
    };
    const expectedAction = {
      type: 'AUTHORIZE_USER_SUCCESS',
      payload: user,
    };
    expect(authorizeUserSuccess(user)).toEqual(expectedAction);
  });
});

describe('authorizeUserStarted', () => {
  it('should create an action authorizeUserStarted', () => {
    const expectedAction = {
      type: 'AUTHORIZE_USER_STARTED',
    };
    expect(authorizeUserStarted()).toEqual(expectedAction);
  });
});

describe('getBooksCatalogStarted', () => {
  it('should create an action getBooksCatalogStarted', () => {
    const expectedAction = {
      type: 'GET_BOOK_CATALOG_STARTED',
    };
    expect(getBooksCatalogStarted()).toEqual(expectedAction);
  });
});

describe('getBookDetailsStarted', () => {
  it('should create an action getBookDetailsStarted', () => {
    const expectedAction = {
      type: 'GET_BOOK_DETAILS_STARTED',
    };
    expect(getBookDetailsStarted()).toEqual(expectedAction);
  });
});

describe('purchaseBooksStarted', () => {
  it('should create an action purchaseBooksStarted', () => {
    const expectedAction = {
      type: 'PURCHASE_BOOKS_STARTED',
    };
    expect(purchaseBooksStarted()).toEqual(expectedAction);
  });
});

describe('resetError', () => {
  it('should create an action resetError', () => {
    const expectedAction = {
      type: 'RESET_ERROR',
    };
    expect(resetError()).toEqual(expectedAction);
  });
});

describe('closePurchaseModal', () => {
  it('should create an action closePurchaseModal', () => {
    const expectedAction = {
      type: 'CLOSE_PURCHASE_MODAL',
    };
    expect(closePurchaseModal()).toEqual(expectedAction);
  });
});

describe('signOut', () => {
  it('should create an action signOut', () => {
    const expectedAction = {
      type: 'SIGN_OUT',
    };
    expect(signOut()).toEqual(expectedAction);
  });
});

describe('authorizeUserFailure', () => {
  it('should create an action authorizeUserFailure', () => {
    const error = 'error';
    const expectedAction = {
      type: 'AUTHORIZE_USER_FAILURE',
      payload: { error: 'error' },
    };
    expect(authorizeUserFailure(error)).toEqual(expectedAction);
  });
});

describe('getBooksCatalogFailure ', () => {
  it('should create an action getBooksCatalogFailure ', () => {
    const error = 'error';
    const expectedAction = {
      type: 'GET_BOOK_CATALOG_FAILURE',
      payload: { error: 'error' },
    };
    expect(getBooksCatalogFailure(error)).toEqual(expectedAction);
  });
});

describe('getBookDetailsFailure  ', () => {
  it('should create an action getBookDetailsFailure  ', () => {
    const error = 'error';
    const expectedAction = {
      type: 'GET_BOOK_DETAILS_FAILURE',
      payload: { error: 'error' },
    };
    expect(getBookDetailsFailure(error)).toEqual(expectedAction);
  });
});

describe('purchaseBooksFailure   ', () => {
  it('should create an action purchaseBooksFailure   ', () => {
    const error = 'error';
    const expectedAction = {
      type: 'PURCHASE_BOOKS_FAILURE',
      payload: { error: 'error' },
    };
    expect(purchaseBooksFailure(error)).toEqual(expectedAction);
  });
});

describe('getBooksCatalogSuccess', () => {
  it('should create an action getBooksCatalogSuccess', () => {
    const books = {
      bookId: '1',
      title: 'title',
      price: 15,
      count: 10,
    };
    const expectedAction = {
      type: 'GET_BOOK_CATALOG_SUCCESS',
      payload: books,
    };
    expect(getBooksCatalogSuccess(books)).toEqual(expectedAction);
  });
});
describe('getBookDetailsSuccess', () => {
  it('should create an action getBookDetailsSuccess', () => {
    const book = {
      bookId: '1',
      title: 'title',
      price: 15,
      count: 10,
    };
    const expectedAction = {
      type: 'GET_BOOK_DETAILS_SUCCESS',
      payload: book,
    };
    expect(getBookDetailsSuccess(book)).toEqual(expectedAction);
  });
});

describe('purchaseBooksSuccess', () => {
  it('should create an action purchaseBooksSuccess', () => {
    const message = 'some text';
    const expectedAction = {
      type: 'PURCHASE_BOOKS_SUCCESS',
      payload: message,
    };
    expect(purchaseBooksSuccess(message)).toEqual(expectedAction);
  });
});

describe('addToCart', () => {
  it('should create an action addToCart', () => {
    const books = ['1', '2', '3'];
    const expectedAction = {
      type: 'ADD_TO_CART',
      payload: books,
    };
    expect(addToCart(books)).toEqual(expectedAction);
  });
});
