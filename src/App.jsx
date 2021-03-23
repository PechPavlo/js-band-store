import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  const { isLoading, user, booksCatalog } = useSelector((state) => state);
  console.log('app', booksCatalog);
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
    </div>
  );
}

export default App;
