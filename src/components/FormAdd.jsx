import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CrearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();
  let Jornada = "";
  const [data, setData] = useState({});
  const name = useSelector((state) => state.auth.displayName);
  let fecha = new Date().toLocaleDateString("es-es", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleChange = (e) => {
    // eslint-disable-next-line no-const-assign
    Jornada = e.target.id;
    console.log(Jornada);
  };

  const handleButton = (e) => {
    console.log(Jornada);

    setData({
      ...data,
      Name: name,
      Jornada: Jornada,
    });

    dispatch(CrearRegistro(name, Jornada));

    if(data.Jornada = "Tarde"){

    }
  };

  console.log("soy el dato del form", data);
  return (
    <div className="center">
      <h6 className="center">{fecha}</h6>

      <hr />
      <br />
      <p className="center">
        Las pausas activas sirven para recuperar energía, mejorar el desempeño y
        eficiencia en el trabajo, y además previenen enfermedades ocupacionales
        y accidentes laborales.{" "}
      </p>
      <br />
      <br />
      <hr />
      <h5>JORNADA</h5>
      <div className="row">
        <div className="col s12"></div>
        <div className="col s6">
          <h5>MAÑANA</h5>
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                id="Mañana"
                onClick={handleChange}
              />
              <span></span>
            </label>
          </p>
        </div>
        <div className="col s6">
          <h5>TARDE</h5>

          <p>
            <label>
              <input
                name="send"
                id="Tarde"
                type="radio"
                onClick={handleChange}
              />
              <span></span>
            </label>
          </p>
        </div>
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
      
    </div>
  );
};

export default FormAdd;
