import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksCatalog } from './redux/actions';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';

function App() {
  const dispatch = useDispatch();
  const { isLoading, user, booksCatalog } = useSelector((state) => state);

  useEffect(() => {
    if (user.isAuthorized) dispatch(getBooksCatalog(user.token));
    // console.log('app user', user);
  }, []);

  // console.log('app', booksCatalog);

  if (isLoading) {
    return (
      <div>
        <p>Loading ...</p>
        <span className="loading-ring" />
      </div>
    );
  }

  return (
    <div className="App">
      {/* <h1>JS Band Store</h1> */}
      {!user.isAuthorized && <LoginPage />}
      {user.isAuthorized && <Header />}
      {user.isAuthorized && <Main />}
    </div>
  );
}

export default App;
