import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Placeorder from "./pages/placeorder/Placeorder"
import Footer from "./Component/Footer/Footer"
import Loginpopup from "./Component/Loginpopup/Loginpopup"





function App() {

const[showlogin,setShowlogin] = useState(false)



  return (

    <>
       {showlogin?<Loginpopup setShowlogin={setShowlogin}/>:<></>}

      <div className="app">
        <Navbar setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />

        </Routes>

      </div>
      <Footer />
    </>

  )
};

export default App
