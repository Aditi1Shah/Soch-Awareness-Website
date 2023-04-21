import { useRef, useContext } from "react";
import "./login.css";
import axios from "../http";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
export default function Login() {
  const userRef = useRef();
  const PasswordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate();
  const handleRegister = (e) => {
    let path = "/register";
    navigate(path);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" }); //its going to go to action.js and turn isfetching true
    //then we will call api
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: PasswordRef.current.value,
      });
      //if we have response means login successful
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      //if error means login failure
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={PasswordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="loginRegisterButton" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
