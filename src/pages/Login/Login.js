import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <section className="login">
      <div className="loginBox">
        <span className="logo">Wecode</span>
        <input className="userInput" name="id" placeholder="name" />
        <input className="userInput" name="password" placeholder="password" />
      </div>
    </section>
  );
};

export default Login;
