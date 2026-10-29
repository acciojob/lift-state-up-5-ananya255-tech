import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Login
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default App;
