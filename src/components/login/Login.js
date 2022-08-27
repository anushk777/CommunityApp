import react from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
        <div className="top-cont">
            <h1>Welcome Back</h1>
        </div>
        <div className="bottom-cont">
            <form>
                <input type="text" name="username" id="username" placeholder="Enter Username"/>
                <input type="password" name="password" id="password" placeholder="Enter Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;
