import React from "react"
import fonecran from "./assets/fondecran.png"
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
    <img width="400px" height="350px" src={fonecran}></img>
    </div>
    </div>
    </header> 
       </>
  )
}
