import React from "react";
import "./register.css";
import RegisterImage from "../../src/images/Register.svg";
export default function Register() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(formData);
  function handleChange(e) {
    e.persist();
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="register">
      <img src={RegisterImage} className="register--img" alt="Register" />
      <div className="register--form">
        <h3 style={{ marginBottom: "35px", marginTop: "20px" }}>Register</h3>
        <form className="register-form-fields">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            onChange={handleChange}
            value={formData.cpassword}
          />
          <button className="register--btn">Sign Up</button>
          <p className="secondary--text">
            Already have an account? <span>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
