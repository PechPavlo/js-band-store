import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isLoading = useSelector((state) => state.isLoading);
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
      <h1>JS Band Store</h1>
    </div>
  );
}

export default App;
