import { db } from "../firebase/config-firebase";
import { types } from "../types/Types";

export const CrearRegistro = (Nombres, Jornada) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const datos = {
      Fecha: new Date().toLocaleDateString(),
      Nombres,
      Jornada
    };
    console.log("soy los datos", datos);
    const referencia = await db.collection(`${uid}/Pausas/pausas`).add(datos);

    const id = await referencia.id;
    const newData = {
      ...datos,
      id,
    };
    dispatch(crear(newData));

    console.log(referencia);
  };
};
export const leerRegistros = (data) => {
  return {
    type: types.pausasRead,
    payload: data,
  };
};

/*export const buscar = (Lugar) => {
  return async (getState) => {
    const { uid } = getState().auth;

    var dataa = await db.doc(`${uid}/nominas/nomina/${Lugar}`).search();

    console.log("ayayayyy",dataa)
  };
};*/

export const crear = (data) => {
  return {
    type: types.pausasAdd,
    payload: data,
  };
};

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/Pausas/pausas/${id}`).delete();

    dispatch(borrar(id));
  };
};

export const borrar = (id) => {
  return {
    type: types.pausasDelete,
    payload: id,
  };
};

export const limpiar = () => {
  return {
    type: types.pausasClean,
  };
};
