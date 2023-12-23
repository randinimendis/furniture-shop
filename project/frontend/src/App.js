import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
//import Register from "./components/UserManagement/register";
//import Login from "./components/UserManagement/login";
//import Test from "./components/UserManagement/test";
import Home from "./components/Home";
import Footer from "./components/inc/footer";

//import Dashboard from "./components/dashboard/dashboard";
//import DashboardHome from "./components/dashboard/dashboardHome";

import Header from "./components/inc/header";
import "bootstrap/dist/css/bootstrap.css";

//import About from "./components/About";



function App() {
  //const isLoggedIn = localStorage.getItem("loggedIn");
 // const loggedRole = localStorage.getItem("role");


  const [code, setCode] = useState('');

  function generateCode() {
    let code = '';
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < 6; i++) {
    //** */  code += possibleChars.charAt(Mayth.floor(Math.random() * possibleChars.length));
    }

    return code;
  }
  {/** 

  function handlePromotionCodeClick() {
    const newCode = generateCode();
    setCode(newCode);

  }  */}


  // const location = useLocation();
  // console.log(location)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
         {/* <Route path="/register" element={<Register />} />*/}
       {/*  <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        {/*<Route path="/test" element={<Test />} />*/}

       {/* <Route path="/admin/dashboard" element={<Dashboard />}> */}
         {/* <Route index element={<DashboardHome />} />*/}
          
       {/* </Route>*/}
       {/**<Route path="/"element={isLoggedIn === "true" ? <Home /> : <Login />} /> */} 

        {/* Custom Tailoring */}
       


        {/* Product Management */}
       
        
        

        {/* Membership Management */}
  
        {/* Payment Management */}


        {/* Order Management */}
        


        



        {/* finance mangement */}

        



        {/*<Route path="/about" element={<About />} />*/}
        


      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
