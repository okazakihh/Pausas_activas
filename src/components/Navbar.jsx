import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    var cerrar = window.confirm("¿Está seguro que desea cerrar sesión?");
    if (cerrar === true) {
      dispatch(limpiar());
      dispatch(logout());
    }


  };

  return (

    <button
      className="btn-floating btn-large waves-effect waves-light red right up"
      onClick={handleLogout}>
      <i className="material-icons">power_settings_new</i>
    </button>

  );
};

export default Navbar;
