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
    <section className={style.sectionabout}>
        <div className={style.About}>
        <div className={style.logoabout}>
        <figure className="hero-banner">
        <img className={style.imgabout}
          src={logoabout}
          loading="lazy"
          alt="hero-banner"
        />
      </figure>        
      </div>
                <div className={style.textabout}>
                    <div className={style.detailabout}>
                    <div className={style.skills}>
                        <img className={style.iconabout} src={Icondev}></img> 
                        <div className={style.whyour}>Why Our Agency</div> 
                        <img className={style.iconabout} src={Iconmark}></img>
                </div>
                <div className={style.textajus}>
  <p style={{color:'white'}}> 🚀 Feel free to reach out if you're looking for a dedicated full-stack web developer who can bring your ideas to life. I'm here to collaborate on projects, answer any questions, or discuss potential opportunities. Let's create something amazing together</p> <br/>
 </div>
        <div className={style.treebutton}>
            <div className={style.staistique}> <div className={style.titleinsidecadre}>+{timer}</div><div className={style.subtitle}> Satisfied Clients </div></div>
            <div className={style.staistique}> <div className={style.titleinsidecadre}>+{timer2}</div><div className={style.subtitle}> Project Lunched</div></div>
            <div className={style.staistique}> <div className={style.titleinsidecadre}>{timer3}</div><div className={style.subtitle}> Years Completed</div></div>
                    </div>
                </div>
    </div>
    </div>
    </section>
    </>
  )
}
