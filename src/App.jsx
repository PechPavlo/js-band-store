import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksCatalog } from './redux/actions';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import BookDetails from './components/BookDetails/BookDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  const {
    isLoading, user, book, booksCatalog, error,
  } = useSelector((state) => state);

  useEffect(() => {
    if (user.isAuthorized) dispatch(getBooksCatalog(user.token));
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
        <span className="loading-ring" />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/js-band-store">
          {error && <Redirect to="/js-band-store/not-found" />}
          {!user.isAuthorized && <Redirect to="/js-band-store/login" />}
          {user.isAuthorized && <Redirect to="/js-band-store/catalog" />}
        </Route>

        <Route path="/js-band-store/login">
          {error && <Redirect to="/js-band-store/not-found" />}
          {user.isAuthorized && !booksCatalog.isLoading && <Redirect to="/js-band-store/catalog" />}
        </Route>

        <Route exact path="/js-band-store/catalog">
          {error && <Redirect to="/js-band-store/not-found" />}
          {!user.isAuthorized && <Redirect to="/js-band-store/login" />}
        </Route>

        <Route path="/js-band-store/cart">
          {error && <Redirect to="/js-band-store/not-found" />}
          {!user.isAuthorized && <Redirect to="/js-band-store/login" />}
        </Route>

        <Route path="/js-band-store/catalog/:id">
          {error && <Redirect to="/js-band-store/not-found" />}
          {!user.isAuthorized && <Redirect to="/js-band-store/login" />}
        </Route>

        <Route path="/js-band-store/*">
          <Redirect to="/js-band-store/not-found" />
        </Route>
      </Switch>

      <Route exact path="/js-band-store/not-found" component={NotFound} />

      <Route exact path="/js-band-store/login" component={LoginPage} />

      <Route exact path="/js-band-store/catalog" component={Header} />
      <Route exact path="/js-band-store/catalog" component={Main} />

      <Route exact path="/js-band-store/catalog/:id" component={Header} />
      {!book.isLoading && <Route exact path="/js-band-store/catalog/:id" component={BookDetails} />}

      <Route path="/js-band-store/cart" component={Header} />
      <Route path="/js-band-store/cart" component={Cart} />
    </Router>
  );
}

export default App;
