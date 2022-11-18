import React from "react";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd";

import Header from "../components/Header";
import TittleHead from "../components/TittleHead";
//import Footer from "../components/Footer";

const AppScreen = () => {
  const datos = useSelector((state) => state.pausas.data);
  datos.sort((a, b) => a - b);

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
        <hr />
      </div>
    </div>
  </>
);
};
export default AppScreen;
