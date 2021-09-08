import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, signup, logout } from "../../actions/session_actions";
import { useRouteMatch } from "react-router-dom";

const SessionForm = (props) => {
  const errors = useSelector((state) => state.errors.session);
  debugger;
  const [user, setUser] = useState({ email: "", password: "" });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const formType = useRouteMatch().path.slice(1);

  

  const emailErr = () => {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes("blank")) {
        return "Email can't be empty";
      } else if (errors[i].includes("Invalid")) {
        return "Invalid Email";
      }
    }
  };

  const pwErr = () => {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].includes("short")) {
        return "Password must be at least 6 characters";
      } else if (errors[i].includes("Invalid")) {
        return "Invalid Password";
      }
    }
  };

  const handleEmail = () => {
    usernameRef.current.focus();
    setUser({
      email: usernameRef.current.value,
      password: user.password,
    });
  };

  const handlePassword = () => {
    passwordRef.current.focus();
    setUser({
      email: user.email,
      password: passwordRef.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "login") {
      dispatch(login(user));
    } else {
      dispatch(signup(user));
    }
  };

  const otherForm = () => {
    return formType == "login" ? <p>Sign Up</p> : <p>Login</p>;
  };

  return (
    <div>
      <header>
        <h2>Welcome to Zip!</h2>
      </header>

      {/* <div>
        {formType == "login" ? (
          <div className="session-form-option">
            <div className="current-from">{formType}</div>
            <div>{otherForm()}</div>
          </div>
        ) : (
          <div className="session-form-option">
            <div>{otherForm()}</div>
            <div className="current-from">{formType}</div>
          </div>
        )}
      </div> */}

      <form className="session-form" onSubmit={handleSubmit}>
        <div className="input-section">
          <label id="session"> Email</label>
          <input
            type="text"
            id="session-input-email"
            value={user.email}
            placeholder="Enter Email"
            onChange={handleEmail}
            ref={usernameRef}
          />
          <p>{emailErr()}</p>
        </div>

        <div className="input-section">
          <label id="session"> Password </label>
          <input
            type="password"
            id="session-input-pw"
            value={user.password}
            placeholder="Enter Password"
            onChange={handlePassword}
            ref={passwordRef}
          />
          <p>{pwErr()}</p>
        </div>

        <div className="session-btn">
          <button>{formType == "login" ? "Submit" : "Sign Up"}</button>
          <p> Or connect with:</p>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
