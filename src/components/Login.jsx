import React from 'react';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  if (isLoggedIn) {
    return <h2>You are logged in!</h2>;
  } else {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsLoggedIn(true);
          }}
        >
          <label>Username: </label>
          <input type="text" required />

          <br /><br />

          <label>Password: </label>
          <input type="password" required />

          <br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default Login;
