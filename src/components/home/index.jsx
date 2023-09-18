import React from "react"
import figmabackfround from "../../assets/fondecran.png"
import style from "./index.module.css"
import Trpc from "../../anim"
export default function Home() {
  return (
    <>
<section className={style.homesection}>
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
  <p className={style.subtitle}>We Are Product Designer From UAE , Dubai</p>
    <div className={style.txttrpc}><Trpc/></div>
    <br/>
  <br/>
  <br/>
    <div>
    <button className={style.btn2}><div color="white">Learn More</div></button>
    </div>
    </div>
        <img className={style.monimg}
          src={figmabackfround}
          loading="lazy"
          alt="hero-banner"
        />
    </div>
    </section> 
       </>
  )
}
