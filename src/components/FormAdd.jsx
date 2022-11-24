import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CrearRegistro } from "../actions/nomina";
import Swal from "sweetalert2";

const FormAdd = () => {
  const dispatch = useDispatch();
  let Jornada = "";

  var today = new Date();
    
  // obtener la fecha y la hora
  var now = today.toLocaleTimeString('en-US');
  var valetime = now.substring(9)
  var valetime2 = now.substring(8)
  console.log(valetime2);
  
  if(valetime === "PM" || valetime2 ==="PM" ){
    Jornada = "Tarde"
  }
  if(valetime === "AM" || valetime2 ==="AM" ){
    Jornada = "Mañana"
  }
  const [data, setData] = useState({});

  const name = useSelector((state) => state.auth.displayName);
  let fecha = new Date().toLocaleDateString("es-es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    Hours: "long",
  });

  const handleButton = (e) => {
    try {
    console.log(Jornada);

 
    console.log(Jornada)
    
    setData({
      ...data,
      Name: name,
      Jornada: Jornada,
    });
      dispatch(CrearRegistro(name, Jornada));

      Swal.fire({
        title: "Completado!",
        text: "Accion completada correctamente",
        icon: "sisses",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "No se pudo cpmplatar la accion!",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
    
  };

  console.log("soy el dato del form", data);
  return (
    <div className="center">
      <h5 className="center">{fecha}</h5>

      
      
      <br />
      <br />
      <hr />
      <h5>JORNADA</h5>
      <div className="row">
        <div className="col s12"></div>
       
        
      </div>
      <div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={handleButton}
        >
          Enviar
          <i className="material-icons right">send</i>
        </button>
      </div>
      <br />
      <hr />
      <p className="center">
        Las pausas activas sirven para recuperar energía, mejorar el desempeño y
        eficiencia en el trabajo, y además previenen enfermedades ocupacionales
        y accidentes laborales.{" "}
      </p>
      <br />
    </div>
  );
};

export default FormAdd;
