import React from 'react';
//import AuthRouters from './routes/AuthRouters';
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouters from './routes/AppRouters';




function App() {
  return (
    <Provider store = {store}>
    <AppRouters />
    </Provider>
  
  );
}

export default App;
