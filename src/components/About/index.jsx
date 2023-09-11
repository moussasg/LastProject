import React, { useEffect, useState } from 'react'
import style from "./index.module.css"
import logoabout from "../../assets/logoabout.png"
import Icondev from "../../assets/si.png"
import Iconmark from "../../assets/marketing.png"
export default function About() {
    const [timer, setTimer] = useState(0);
    const [timer2 , setTimer2]= useState(0)
    const [timer3 , setTimer3] = useState(0)
    useEffect(() => {
        const interval1 = setInterval( () => {
            if (timer < 1000) {
                setTimer(prevTimer => prevTimer + 1);
            }
        } , 1);//1milisec
        const interval2 = setInterval( () => {
            if (timer2 < 35) {
                setTimer2(prevTimer => prevTimer + 1);
            }
        }, 1);
        const interval3 = setInterval( () => {
            if (timer3 < 2) {
                setTimer3(prevTimer => prevTimer + 1);
            }
        }, 1);
    return () => {
         // Nettoyage ou annulation de l'effet (facultatif)
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
    };
}, [timer, timer2, timer3]);
  return (
    <>
        <div className={style.About}>
        <div className={style.logoabout}>
        <figure className="hero-banner">
        <img
          src={logoabout}
          width="500px" 
          height="400px"
          loading="lazy"
          alt="hero-banner"
          className="w-100 banner-animation"
        />
      </figure>        
      </div>
                <div className={style.textabout}>
                    <div className={style.detailabout}>
                    <div className={style.skills}><img width="100px" height="100px" src={Icondev}></img> <h1>Why Our Agency</h1> <img width="100px" height="100px" src={Iconmark}></img> </div>
                <div className={style.textajus}>
  <p> 🚀 Feel free to reach out if you're looking for a dedicated full-stack web developer who can bring your ideas to life. I'm here to collaborate on projects, answer any questions, or discuss potential opportunities. Let's create something amazing together</p> <br/>
 </div>
                    <div className={style.treebutton}>
            <div className={style.staistique}> <h1>+{timer}</h1><p> Satisfied Clients</p></div>
            <div className={style.staistique}> <h1>+{timer2}</h1><p> Project Lunched</p></div>
            <div className={style.staistique}> <h1>{timer3}</h1><p> Years Completed</p></div>
                    </div>
                </div>
    </div>
    </div>
    </>
  )
}
