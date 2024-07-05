import React, { useState } from 'react'
import "./loginpopup.css"
import { assets } from '../../assets/Food Del Frontend Assets/assets/assets'

export default function Loginpopup({ setShowlogin }) {
    const [currstate, setcurrstate] = useState("Login")


    return (
        <div className='login-popup'>
            <form className='login-popup-container'>

                <div className='login-popup-tittle'>
                    <h2>{currstate}</h2>
                    <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className='login-popup-inputs'>
                    {currstate === "Login" ? <></> : <input type="text" placeholder='your name' required />}
                   
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder=' password' required />
                </div>

                <button>{currstate === "Sign Up" ? "Create account" : "login"}</button>
                
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>

                {currstate === "Login"
                    ? <p>Create a new account?<span onClick={() => setcurrstate("Sign Up")} >Click here</span></p>
                    : <p>Already have an account?<span onClick={() => setcurrstate("Login")} >Login here</span></p>
                }

            </form>
        </div>
    )
}











