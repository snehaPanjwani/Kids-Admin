import React, { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import WebService from "./services/WebService";

const Login = () => {
    const [msg,setmsg] = useState("");

    const navigate = useNavigate();

    const emailRef = useRef();
    const psrdRef = useRef();
    const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const obj = {
        email : emailRef.current.value,
        password : psrdRef.current.value
    }
    const response = await WebService.postCall(WebService.URLS.LOGIN,obj);
    if(response.status){
        e.target.reset();
        navigate("/home")
    }
    setmsg(response.msg); 
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            ref={psrdRef}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </div>
        <b className="text-danger">{msg}</b>
        &nbsp;
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;