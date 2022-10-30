import React from "react";
import "./login.css";
import LoginImage from "../../src/images/Login.svg";
export default function Login() {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  console.log(loginData);
  function handleChange(e) {
    e.persist();
    setLoginData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <div className="login">
      <img src={LoginImage} className="login--img" alt="Login" />
      <form className="login--form">
        <h4>Login</h4>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <br />
        <button>Login</button>
        <p>Forgot Password?</p>
      </form>
    </div>
  );
}
//<img src={LoginImage} className="login--img" alt="Login" />
