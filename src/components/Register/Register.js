import React from "react";
import './Register.css';

const Register = () => {
  return (
    <div>
      <div className="register">
        <h2>
          Please <span className="orange">Login</span>
        </h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <br />
          <input type="email" placeholder="Your email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input className="submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Register;
