import React from "react";
import "./LoginWindow.css";

const loginWindow = props => {
  return (
    <div className="Login">
      <input
        type="text"
        placeholder="Email..."
        name="user"
        id="user"
        onChange={props.getUserValue}
      />
      <input
        type="password"
        placeholder="Password..."
        name="password"
        id="pass"
        onChange={props.getUserPassword}
      />
      <input
        type="button"
        value="Login"
        className="Login__logBtn"
        onClick={props.HandleLogin}
      />
      <input
        type="button"
        value="Signup"
        className="Login__signBtn"
        onClick={props.HandleSignup}
      />
      <p className="Login__message">{props.message}</p>
    </div>
  );
};

export default loginWindow;
