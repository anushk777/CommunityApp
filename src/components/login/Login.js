import react, { useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div className="login-container">
        <div className="top-cont">
            <h1>Welcome Back</h1>
        </div>
        <div className="bottom-cont">
            <form onSubmit={handleSubmit}>
                <input required={true} type="email" ref={emailRef} name="log-mail" id="log-mail" placeholder="Enter Email..." autofocus="true" autoComplete="off" />
                <input required={true} type="password" ref={passwordRef} name="password" id="password" placeholder="Enter Password..." />
                <button type="submit" className="login-btn">Login</button>
            </form>
            <button className="signup-btn"><Link to="/signup" className="link">Sign Up</Link></button>
        </div>
    </div>
  )
}

export default Login;
