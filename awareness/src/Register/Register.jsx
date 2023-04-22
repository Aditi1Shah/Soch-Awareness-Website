import { useEffect, useState } from "react";
// import axios from "../http";
import axios from "../http";
import "./register.css";
import WarnModal from "./Warnmodal";

export default function Register() {
  const [open, setOpen] = useState(false);
  const handleClose = (open) => {
    setOpen(false);
  };
  const handleOpen = (open) => {
    setOpen(true);
  };

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "/auth/register",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      res.data && window.location.replace("/login");
    } catch (err) {
      //alert("user exists with same name");
      setError(true);
    }
  };
  useEffect(() => {
    if (error) {
      handleOpen();
    }
  }, [error]);

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="First Name"
          onChange={(e) => setusername(e.target.value)}
        />
        {/* <label>Last Name</label>
        <input type="text" className="registerInput" placeholder="Last Name" /> */}
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        {/* <label for="phone">Phone number:</label>
        <input
          type="tel"
          className="registerInput"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        /> */}
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerButton">Login</button>
      {error && <WarnModal open={open} handleClose={handleClose} />}
      {/* {error && <span>User with same username exists</span>} */}
    </div>
  );
}
