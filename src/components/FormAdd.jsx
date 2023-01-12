import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { CrearRegistro } from "../actions/nomina";

const FormAdd = () => {
  //const { id, Fecha, Nombres, Jornada } = data;
  //console.log(data.Fecha);
  const datos = useSelector((state) => state.pausas.data);
  const test = datos.sort((a, b) => a - b);
  var x = "";
  var valueFecha;
  var valueJornada;
  console.log("cargando...", test);

  let fecha = new Date().toLocaleDateString("es-es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    Hours: "long",
  });
  const capitalizedText = fecha.charAt(0).toUpperCase() + fecha.slice(1);
  
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = datos.filter((elemento) => {
      if (
        elemento.Fecha.toString().includes(terminoBusqueda) ||
        elemento.Jornada.toString().includes(terminoBusqueda)
      ) {
        return elemento;
      }
    });
    x = resultadosBusqueda;
    //console.log("aca", resultadosBusqueda);
  };
  var today = new Date().toLocaleDateString();
  const fechaS = today.toString();
  filtrar(fechaS);
  for (let i = 0; i < x.length; i++) {
    var y = x[i];
    valueFecha = y.Fecha;
    valueJornada = y.Jornada;
  }

 // console.log(valueFecha);
var month = today.toString().split("/")[1] 
var mes =""
switch (month) {
  case "1":
    mes = "Enero"
    break
    case "2":
    mes = "Febrero"
    break
    case "3":
    mes = "Marzo"
    break
    case "4":
    mes = "Abril"
    break
    case "5":
    mes = "Mayo"
    break
    case "6":
    mes = "Junio"
    break
    case "7":
    mes = "Julio"
    break
    case "8":
    mes = "Agosto"
    break
    case "9":
    mes = "Septiembre"
    break
    case "10":
    mes = "Octubre"
    break
    case "11":
    mes = "Noviembre"
    break
    case "12":
    mes = "Diciembre"
    break
}

  console.log("soy el mes",mes);

 const [daatos, setDaatos] = useState({});
  let jornada = "";
  var today = new Date();
  
  // obtener la fecha y la hora
  var now = today.toLocaleTimeString("en-US");
  var valetime = now.substring(9);
  var valetime2 = now.substring(8);
  const dispatch = useDispatch();

 // console.log("today...", now.substring(5));
  const name = useSelector((state) => state.auth.displayName);
  
  if (valetime === "PM" || valetime2 === "PM") {
    jornada = "Tarde";
  }
  if (valetime === "AM" || valetime2 === "AM") {
    jornada = "Mañana";
  }
  console.log(daatos)
  
  const handleButton = (e) => {
    try {
      if (
        valueJornada === jornada.toString() &&
        valueFecha === fechaS.toString()
      ) {
        Swal.fire({
          title: "No se puede completar!",
          text: "Usted ya registró su atividad en la jornada de la " + jornada,
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        console.log(jornada);

        setDaatos({
          ...datos,
          Name: name,
          Jornada: jornada,
          Mes: mes      
          });
        dispatch(CrearRegistro(name, jornada, mes));

        Swal.fire({
          title: "Completado!",
          text: "Acción completada correctamente",
          icon: "susses",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "No se pudo complatar la acción!",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
 
  return (
    <div className="center">
    
      <h5 className="center">{capitalizedText}</h5>
      <br />

  

      <div className="row" >
        <div className="col s12 ">
          <div className="card" style={{didplay:"grid"}}>
            <div className="card-image" style={{didplay:"grid"}} >
              <ReactPlayer
              
                url="https://www.youtube.com/watch?v=blnNeQbaasw"
                className="react-player center"
               
                width="100%"
               
                controls="true"
              />
            </div>
          </div>
        </div>
      </div>
  

      <br />

      <div>
        <h5>JORNADA DE LA {jornada.toLocaleUpperCase()}</h5>
        <div className="row">
          <div className="col s12"></div>
        </div>
        <div id="section_button">
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
          Las pausas activas sirven para recuperar energía, mejorar el desempeño
          y eficiencia en el trabajo, además previenen enfermedades
          ocupacionales y accidentes laborales.{" "}
          
        </p>
       
        <br />
      </div>
      <br />
      <br />
    
    </div>
  );
};

export default FormAdd;
