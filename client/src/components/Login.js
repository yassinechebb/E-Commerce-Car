import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
  <div className="left">
    <div className="header">
      <h2 className="animation a1">Welcome Back</h2>
      <h4 className="animation a2">
        Log in to your account using email and password
      </h4>
    </div>
    <div className="form">
      <input
        type="email"
        
        className="inputt form-field animation a3"
        placeholder="Email Address"
        onChange={(e) => setlogin({ ...login, email: e.target.value })}
      />
      <input
        type="password"
        className="inputt form-field animation a4"
        placeholder="Password"
        onChange={(e) => setlogin({ ...login, password: e.target.value })}
      />
      <p className="animation a5">
        
        <h5>
            u already have account <Link to="/register">Register now</Link>{" "}
          </h5>
      </p>
      <button className="buttonn animation a6" onClick={() => {
              setTimeout(() => {
                dispatch(userlogin(login));
                navigate("/profil");
              }, 1000);
            }} >LOGIN</button>

    </div>
  </div>
  <div className="right" />
</div>

    </div>
    // <div>
    // // <div>
    // //   <div className="wrapper">
    // //     <form onSubmit={(e) => e.preventDefault()} className="form-signin">
    // //       <h2 className="form-signin-heading">Please login</h2>
    // //       <input
    // //         type="text"
    // //         class="form-control"
    // //         name="username"
    // //         placeholder="Email Address"
    // //         required=""
    // //         autofocus=""
    // //         onChange={(e) => setlogin({ ...login, email: e.target.value })}
    // //       />
    // //       <input
    // //         type="text"
    // //         class="form-control"
    // //         name="Password"
    // //         placeholder="Password"
    // //         required=""
    // //         autofocus=""
    // //         onChange={(e) => setlogin({ ...login, password: e.target.value })}
    // //       />

    // //       <label class="checkbox">
    // //         <input
    // //           type="checkbox"
    // //           value="remember-me"
    // //           id="rememberMe"
    // //           name="rememberMe"
    // //         />{" "}
    // //         Remember me
    // //       </label>
    // //       <button
    // //         className="btn btn-lg btn-primary btn-block"
    // //         onClick={() => {
    // //           setTimeout(() => {
    // //             dispatch(userlogin(login));
    // //             navigate("/profil");
    // //           }, 1000);
    // //         }}
    // //       >
    // //         login
    // //       </button>
    // //       <h5>
    // //         u already have account <Link to="/register">Register now</Link>{" "}
    // //       </h5>
    // //     </form>
    // //   </div>
    // // </div>
  );
}

export default Login;