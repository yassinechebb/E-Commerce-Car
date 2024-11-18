import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getusers, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";



import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashbord from "./components/Dashbord";
import { getproduct } from "./JS/productslice";
import ProductDetails from "./components/ProductDetails";
import Commond from "./components/Commond";
import { getdemande } from "./JS/demandeSlice";
import Dashbord2 from "./components/Dashbord2";
import Footer from "./components/Footer";



function App() {
  const [ping, setping] = useState(false)
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getdemande());
    dispatch(getusers())
  }, [ping]);
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route  path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element ={<Home/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/dashbord' element ={<Dashbord2 ping={ping} setping={setping}/>}/>
        <Route path='/commond' element ={<Commond/>}/>
        
        <Route path='/details/:id' element ={<ProductDetails ping={ping} setping={setping}/>}/>
        <Route path="/profil" element={<Profil ping={ping} setping={setping}/>} />
       
      </Routes>
      
    </div>
  );
}

export default App;
