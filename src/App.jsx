import React from "react"
import fond from "./assets/fondecran.png"
import { useSpring, animated } from 'react-spring';
import "./App.css"
import Trpc from "./anim"
export default function App() {
  return (
    <>
<header>
    <div className="container">
    <div className="logo">
      <h2>MyDesign</h2>
    </div>
      <div className="nav">    
      <div><h3>Home</h3></div>
      <div><h3>Service</h3></div>
      <div> <h3>Contact</h3></div>
      </div>
    </div>
    {/*Deuxiemme partie */}
    <div className="Home">
    <div className="prensentation">
    <h1><Trpc/></h1>
    </div>
    <div className="monimg">
    <figure className="hero-banner">
        <img
          src={fond}
          width="400px" 
          height="350px"
          loading="lazy"
          alt="hero-banner"
          className="w-100 banner-animation"
        />
      </figure>
    </div>
    </div>
    </header> 
       </>
  )
}
