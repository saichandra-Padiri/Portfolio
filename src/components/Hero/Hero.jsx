import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero=()=>{
    return <section className={styles.container}>
        
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sai Chandra</h1>
            <p className={styles.description}>Accumulated two years of hands-on experience as a java web application developer,contributing to the design, development, and maintenance of robust and scalable web solutions</p>
            <a href="mailto:padirisaichandra6@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        
    </section>
}