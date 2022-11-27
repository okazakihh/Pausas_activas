import React from "react";

import FormAdd from "../components/FormAdd";
import Header from "../components/Header";
import TittleHead from "../components/TittleHead";

const AppScreen = () => {

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
