
import React, { useState } from 'react';


const Login = () => {

    const [islogin, setIslogin] = useState(false);
    
    if(islogin){
        return <h2>You are logged in!</h2>;
    }else{
  return (
    <div>
      <form onSubmit={(e)=>{
      e.preventDefault();
        setIslogin(true);
      }}>
        <label>Username: </label>
        <input type="text" required></input>
    <br></br>
    <br></br>
        <label>Password: </label>
        <input type="password" required></input>
<br></br>
<br></br>
        <button value="sumbit">Submit</button>
      </form>
    </div>
    
  )
}}

export default Login
