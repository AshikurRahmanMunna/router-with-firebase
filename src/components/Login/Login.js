import React from "react";
import useFirebase from "../../hooks/useFirebase";
import './Login.css';

const Login = () => {
  const {signInWithGoogle} = useFirebase();
  return (
    <div>
      <div className="login">
      <h2>Please <span className="orange">Login</span></h2>
        <form className="form">
          <input type="email" placeholder="your email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button className="submit" type="submit">Submit</button>
        </form>
        <button onClick={signInWithGoogle} className="submit">Google Sign In</button>
      </div>
    </div>
  );
};

export default Login;
