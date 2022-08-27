import react from 'react';
import "./Signup.css"

const Signup=()=>{
  return (
    <div className="signup-container">
        <div className="top-cont">
            <h1>Create a new Account</h1>
        </div>
        <div className="bottom-cont">
            <form>
                <input type="text" name="username" id="username" placeholder="Enter Username..." autofocus="true"/>
                  <input type="email" name="email" id="email" placeholder="Enter your email..."/>
                <input type="password" name="password" id="password" placeholder="Enter Password..."/>
                  <input type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password..."/>
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>

        </div>
    </div>
  );
}


export default Signup;
