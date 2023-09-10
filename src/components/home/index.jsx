import style from "./index.module.css"
import React from 'react'
import fonecran from "../../assets/fondecran.png"
export default function Home() {
  return (
    <>
    <header>
    <div className={style.cont}>
    <div className={style.logo}>
      <h1>MyDesign</h1>
    </div>
      <div className={style.nav}>      
      <div><h3>Home</h3></div>
      <div><h3>Service</h3></div>
      <div> <h3>Contact</h3></div>
      </div>
    </div>
    <div className={style.contenu}>
    <div className={style.prensentation}>
    <h1>We Design Interfaces That Users Love</h1>
    </div>
    <div className={style.monimg}>
    <img width="200px" height="200px" src={fonecran}></img>
    </div>
    </div>
    </header>
  </>
  )
}
