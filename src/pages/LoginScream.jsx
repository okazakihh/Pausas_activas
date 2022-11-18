import React, { useState } from "react";

import { Link } from "react-router-dom";

import GoogleButton from "react-google-button";
import { googlelogin, emailAndPasswordLogin } from "../actions/auth.js";
import { useDispatch } from "react-redux";

const LoginScream = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  console.log(setData)
  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
    
  };
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
   
   dispatch(googlelogin());
  };

  return (
    <div> 
    <div className="container  ">
      <h3 className="tittle">Login page</h3>
      <hr />

      <div className="row">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row">
            <div className="input-field col s11">
              <i className="material-icons prefix">mail</i>
              <input
                id="icon_prefix1"
                type="email"
                className="validate"
                onChange={handleChange}
                value={email}
                name="email"
              />
              <label htmlFor="icon_prefix1">Email</label>
            </div>
            <div className="input-field col s11">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_prefix2"
                type="password"
                className="validate"
                onChange={handleChange}
                value={password}
                name="password"
              />
              <label htmlFor="icon_prefix2">Pass</label>
            </div>
          </div>
          <div className="row col s7">
            <button className="waves-effect waves-light btn ">Enter</button>
            <hr className="row" />
            <div className=" row col">
              <Link className="row " to="/auth/register">
                Register in the platform
              </Link>
              <GoogleButton className="row" onClick={handleGoogleLogin} />
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginScream;
