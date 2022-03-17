import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const fullname = useRef();
  const eid = useRef();
  const dob = useRef();
  const contact = useRef();
  //const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const onLogClick= ()=>{
    history.push("/login");
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        fullname: fullname.current.value,
        eid: eid.current.value,
        dob: dob.current.value,
        contact: contact.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:3000/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Employee Dashboard</h3>
          <span className="loginDesc">
         Cloud computing Lab project
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Full Name"
              required
              ref={fullname}
              className="loginInput"
            />
            <input
              placeholder="Employee Id"
              required
              ref={eid}
              className="loginInput"
            />
             <input
              placeholder="Date of Birth"
              required
              ref={dob}
              className="loginInput"
            />
             <input
              placeholder="Contact Number"
              required
              ref={contact}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="4"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={onLogClick}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
