import {useState, useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";

export default function Login() {

  const history = useHistory();
  const eid = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const [message, setMessage] = useState("");

  const onRegClick= ()=>{
    history.push("/register");
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { eid: eid.current.value, password: password.current.value },
      dispatch, setMessage
    );
    //console.log("auth", AuthContext.user);
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
          <div style={{margin:"auto", marginTop:"0px", marginBottom:"0px", color:"red"}}>{message} </div>
            <input
              placeholder="Employee Id"
              type="eid"
              required
              className="loginInput"
              ref={eid}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="4"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={onRegClick}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
