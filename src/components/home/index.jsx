import React from "react"
import fond from "../../assets/fondecran.png"
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
      <div className={style.butasortie}>
        <button className={style.btn2}><div color="white">Get A Quote</div></button>
      </div>
      </div>
    </div>
    {/*Deuxiemme partie */}
    <div className={style.Home}>
<div className={style.prensentation}>
  <div className={style.trpc}>
  <p className={style.subtitle}>We Are Product Designer From UAE , Dubai</p>
    <h1><Trpc/></h1>
  </div>
    <div>
    <button className={style.btn2}><div color="white">Learn More</div></button>
    </div>
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
