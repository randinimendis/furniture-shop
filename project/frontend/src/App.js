
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import React, { useState } from 'react';
//import Register from "./components/UserManagement/register";
import Home from "./components/Home";
import Footer from "./components/inc/footer";
import Header from './components/inc/header';


//import DeliveryManagament from "./components/DeliveryManagement/DeliveryManagament";


function App() {
  //const isLoggedIn = localStorage.getItem("loggedIn");
  //const loggedRole = localStorage.getItem("role");

/*
  const [code, setCode] = useState('');

  function generateCode() {
    let code = '';
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 6; i++) {
      code += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return code;
  }

  function handlePromotionCodeClick() {
    const newCode = generateCode();
    setCode(newCode);

  }
*/

  // const location = useLocation();
  // console.log(location)

  return (
    <BrowserRouter>
     <Header /> 

      <Routes>
      
       {/** <Route path="/register" element={<Register />} />*/}
       <Route path="/" element={<Home />} />
      </Routes>

      {/** <Footer />*/}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

