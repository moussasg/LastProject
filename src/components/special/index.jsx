import React from 'react'
import style from "./index.module.css"
import IconWeb from "../../assets/webdev.png"
import Websol from "../../assets/websol.jpg"
import Strat from "../../assets/start.webp"
export default function Special() {
  return (
    <div>
            <div className={style.container}>
            <div className={style.title}>
                <h1>Our Speciallization</h1>
            </div>
            <br/>
            <div className={style.treecard}>
                <div className={style.same}><div><img width="400px" height="300px" src={Strat}></img></div> <div className={style.indicspecial}><h3>🔴 Strategy && Research 🔴</h3></div><div><button></button></div></div>
                <div className={style.same}><div><img width="400px" height="300px" src={IconWeb}></img></div> <div className={style.indicspecial}><h3>🔴 Web Development 🔴</h3></div><button></button></div>
                <div className={style.same}><div><img width="400px" height="300px" src={Websol}></img></div> <div className={style.indicspecial}> <h3>🔴 Web Solution 🔴</h3></div><button></button></div>
            </div>
            </div>
    </div>
  )
}
