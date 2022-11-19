import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";
import FormAdd from "../components/FormAdd";
import Header from "../components/Header";
import TittleHead from "../components/TittleHead";

const AppScreen = () => {
  const datos = useSelector((state) => state.pausas.data);
  datos.sort((a, b) => a - b);
  console.log("info main",datos);

  return (
    <>
      <Header />
      <br />
      <div className="container center ">
        <br />
        <TittleHead />
      </div>
      <div>
        <div className="container">
          <hr />

          <FormAdd />
          <div className="row">
            {datos
              ? datos.map((dato) => {
                  return (
                    <div className="col  " key={dato.id}>
                      <Element data={dato} />
                    </div>
                  );
                })
              : console.log("cargando...")}
          
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
export default AppScreen;
