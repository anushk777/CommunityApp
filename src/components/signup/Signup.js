import react, { useRef } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const branchRef = useRef();
  const semRef = useRef();
  const passwordRef = useRef();
  const confPassRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="top-cont">
        <h1>Create a new Account</h1>
      </div>
      <div className="bottom-cont">
        <form onSubmit={handleSubmit}>
          <div className="name-cont">
            <input
              type="text"
              required={true}
              ref={fNameRef}
              name="fName"
              id="fName"
              placeholder="First Name..."
              autofocus="true"
            />
            <input
              type="text"
              name="lName"
              ref={lNameRef}
              id="lName"
              placeholder="Last Name..."
            />
          </div>
          <div className="academic-cont">
            <input
              type="text"
              required={true}
              ref={branchRef}
              name="branch"
              id="branch"
              placeholder="Enter Your Branch..."
            />
            <input
              type="text"
              required={true}
              ref={semRef}
              name="curr-sem"
              id="curr-sem"
              placeholder="Enter Current Semister..."
            />
          </div>
          <input
            type="email"
            required={true}
            ref={emailRef}
            name="email"
            id="sign-email"
            placeholder="Enter Your Email..."
          />
          <input
            type="password"
            required={true}
            ref={passwordRef}
            name="password"
            id="password"
            placeholder="Enter Password..."
          />
          <input
            type="password"
            required={true}
            ref={confPassRef}
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password..."
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <button className="login-btn">
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Signup;
