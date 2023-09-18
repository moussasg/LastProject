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
                <div className={style.ourspecial}> Our Speciallization</div>
            </div>
            <br/>
            <div className={style.treecard}>
                <div className={style.same}><div><img className={style.sameimg} src={Strat}></img></div> <div className={style.indicspecial}><h4>🔴 Strategy && Research 🔴</h4></div><div><button></button></div></div>
                <div className={style.same}><div><img className={style.sameimg} src={IconWeb}></img></div> <div className={style.indicspecial}><h4>🔴 Web Development 🔴</h4></div><button></button></div>
                <div className={style.same}><div><img className={style.sameimg} src={Websol}></img></div> <div className={style.indicspecial}> <h4>🔴 Web Solution 🔴</h4></div><button></button></div>
            </div>
            </div>
    </div>
  )
}
