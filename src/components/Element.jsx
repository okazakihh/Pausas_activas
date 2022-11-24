import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro} from "../actions/nomina";

const Element = ({ data }) => {
  const { id, Fecha, Nombres, Jornada } = data;
 
  const dispatch = useDispatch();
  const [viewInfo, setViewInfo] = useState(false);
 
  let fechaFormato;
console.log("estoy en el element")
  if (Fecha.seconds) {
    const date = Fecha.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = Fecha;
  }

  const handleDelete = () => {
    var confirmar = window.confirm(
      "Esta que seguro que desea eliminar el registro?"
    );
    if (confirmar === true) {
      dispatch(borrarRegistro(id));
      alert("Registro eliminado correctamente");
    }
  };
  const handleinfo = () => {
    setViewInfo(!viewInfo);
  };
 

  return (
    <>
     
      <div className="row">
        <td>{fechaFormato }</td>
        <td> </td>
        <td></td>
        <td>
          <button onClick={handleinfo} className="btn waves-effect waves-light">
            {!viewInfo ? (
              <i className="small  material-icons">visibility</i>
            ) : (
              <i className="small  material-icons">visibility_off</i>
            )}

            <br />
          </button>
        </td>
      </div>
      {viewInfo && (
        <div className="row" id="info">
          <div className="col s9 m9">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <p>
                  Fecha: {Fecha}
                  <br />
                  Nombres: {Nombres}
                  <br />
                  Jornada: {Jornada}
                  <br />
                  <button
                    onClick={handleDelete}
                    className="btn waves-effect red center"

                  >
                     <i className="material-icons">delete_forever</i>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Element;
