import React from "react";
import Footer from "../components/Footer";

import FormAdd from "../components/FormAdd";
import Header from "../components/Header";
import TittleHead from "../components/TittleHead";

const AppScreen = () => {
  return (
    <>
      <Header />
      <br />
      <div className="container center ">
       

        <TittleHead />
      </div>
      <div>
        <div className="container">
          <FormAdd />

        </div>
      <Footer />
      </div>
    </>
  );
};
export default AppScreen;
