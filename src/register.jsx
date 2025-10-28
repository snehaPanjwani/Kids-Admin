import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebService from "./services/WebService";

const Register = () => {

  const [msg, setmsg] = useState("");

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const psrdRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    const obj = {
        name : nameRef.current.value,
        email : emailRef.current.value,
        password : psrdRef.current.value
    }
    const response = await WebService.postCall(WebService.URLS.REGISTER,obj);
    if(response.status){
        e.target.reset()
    }
    setmsg(response.msg);
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            ref = {nameRef}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            ref={emailRef}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            ref={psrdRef}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <b className="text-danger">{msg}</b>
        &nbsp;&nbsp;
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Register
        </button>
      </form>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={handleLoginRedirect}
          style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer", padding: 0 }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
