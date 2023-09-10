import React from "react"
import fond from "../../assets/fondecran.png"
import { useSpring, animated } from 'react-spring';
import style from "./index.module.css"
import Trpc from "../../anim"
export default function Home() {
  return (
    <>
<header>
    <div className={style.container}>
    <div className={style.logo}>
    <h2>MyDesign</h2>
    </div>
      <div className={style.nav}>     
      <div><h3>Home</h3></div>
      <div><h3>Service</h3></div>
      <div> <h3>Contact</h3></div>
      </div>
    </div>
    {/*Deuxiemme partie */}
    <div className={style.Home}>
<div className={style.prensentation}>
    <h1><Trpc/></h1>
    </div>
    <div className={style.monimg}>  
    <figure className="hero-banner">
        <img
          src={fond}
          width="500px" 
          height="400px"
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
