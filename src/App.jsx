import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksCatalog } from './redux/actions';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import Main from './components/Main/Main';

function App() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state);

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
    <div className="App">
      {!user.isAuthorized && <LoginPage />}
      {user.isAuthorized && <Header />}
      {user.isAuthorized && <Main />}
    </div>
  );
}

export default App;
