import React from 'react'
import styles from '../../styles/landingpage.module.css'
import bitmoji_hi from '../../assets/img/bitmoji_hi.png'

export default function Index({theme}) {
    return (
        <section id="home">
            <div className={styles.container}>
                <div className={styles.intro}>
                    <div>Hello there! I am</div>
                    <div className={styles.name}>Mihir Mulay</div>
                    <div className={styles.brief}>
                        Frontend web developer, 
                        dog lover and meme lord.
                    </div>
                </div>
                <div className={styles.mypic}>
                    <img src={bitmoji_hi} alt="myself" />
                </div>
            </div>
        </section>
    )
}