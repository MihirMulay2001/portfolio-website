import React from 'react'
import styles from '../../styles/landingpage.module.css'
import mypicture from '../../assets/img/MyPicture.png'


export default function Index({theme}) {
    return (
        <section id="home">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <div>Hello there! I am</div>
                    <div className={styles.name}>Mihir Mulay</div>
                    <div className={styles.brief}>Frontend web developer 👩‍💻, dog lover 🐶 and meme lord 🃏</div>
                </div>
                <div  className={styles.mypic}>
                    <img src={mypicture} alt="myself" />
                </div>
            </div>
        </section>
    )
}