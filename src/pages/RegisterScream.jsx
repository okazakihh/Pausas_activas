import React, { useState } from "react";
import { useDispatch }  from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {register} from '../actions/auth';
const RegisterScream = () => {

const dispatch = useDispatch()

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = data;
  const handleChange = (e) => {
    const values = e.target.value;
    setData({
      ...data,
      [e.target.name]: values
    })
    console.log(values);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    var validate = 0;
    if (email.trim() === "" ) {
      
      Swal.fire({
        title: "Error!",
        text: "Debe ingresar un email!",
        icon: "error",
        confirmButtonText: "Cool",
      });
      
      validate =+ 1;
    }

    if (username.trim().length < 3 || username.trim()==="") {
      
      Swal.fire({
        title: "Error!",
        text: "El usuario ingresado es incorrecto.\nRecuerde que debe tener minimo tres caracteres \ny el campo no puede estar vacio ",
        icon: "error",
        confirmButtonText: "Cool",
      });
      validate =+ 1;
    }

    if (password.trim().length < 6) {
      
      Swal.fire({
        title: "Error!",
        text: "La contraseña debe tener al menos 6 caracteres",
        icon: "error",
        confirmButtonText: "Cool",
      });
      validate =+ 1;
    }
      if (password.trim() !== password2.trim()) {
        
        Swal.fire({
          title: "Error!",
          text: "la contraseña no coicide",
          icon: "error",
          confirmButtonText: "Cool",
        });
        validate =+ 1;
      }
      if(validate === 0) {
        dispatch(register(email, password, username));
       }
    

  };
  return (
    <div className="container">
      <h3 className="tittle">Registrarse</h3>

      <div className="row">
        <form className="col s12" onSubmit={handleRegister}>
          <div className="row">
            <div className="input-field col s11">
              <i className="material-icons prefix ">mail</i>
              <input
                id="icon_prefix1"
                name="email"
                type="email"
                className="validate "
                onChange={handleChange}
                value={email}
              />
              <label htmlFor="icon_prefix1">Correo</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input
                onChange={handleChange}
                value={username}
                id="icon_prefix2"
                className="materialize-textarea"
                name="username"
                type="text"
              />
              <label htmlFor="icon_prefix2">Usuario</label>
            </div>
            <div className="input-field col s11">
              <i className="material-icons prefix">vpn_key</i>
              <input
                id="icon_prefix3"
                name="password"
                type="password"
                className="validate"
                onChange={handleChange}
                value={password}
              />
              <label htmlFor="icon_prefix3">contraseña</label>
            </div>
            <div className="input-field col s11">
              <i className="material-icons prefix">done</i>
              <input
                id="icon_prefix4"
                name="password2"
                type="password"
                className="validate"
                onChange={handleChange}
                value={password2}
              />
              <label htmlFor="icon_prefix4">Confirmar contraseña</label>
            </div>
          </div>

          <div className="row col s7">
            <button className="waves-effect waves-light btn " type="submit">Enviar</button>
            <hr className="row" />
            <div className=" row col">
              <Link className="row " to="/auth/login">
                Iniciar sesión 
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScream;
