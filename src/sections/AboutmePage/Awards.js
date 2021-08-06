import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import best_student from '../../assets/img/bitmoji_beststudent.png'
import prefect from '../../assets/img/bitmoji_prefect.png'


export default function Awards() {
    return (
        <section id="awards">
            <div className={styles.section}>
                <h2>Awards</h2>
            <div className={styles.container}>
                <div className={styles.container}>
                <div className={styles.firsthalf_award}>
                    <h3>Best outgoing student</h3>
                    <p>I received an award for the best outgoing student in my 12th grade for my exemplary behaviour, 
                        excellent academic record and leadership qualities.
                    </p>
                </div>
                <div className={styles.secondhalf_award}>
                    <img src={best_student} alt="certificate" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.firsthalf_award}>
                    <h3>School Prefect</h3>
                    <p>I was elected as the school prefect in 10th because of my outstanding behaviour and excellent academic record. 
                        Being a prefect taught me a lot about handling responsibilities, organizing an event and managing a crowd.
                    </p>
                </div>
                <div className={styles.secondhalf_award}>
                    <img src={prefect} alt="certificate" />
                </div>
            </div>
            </div>
            </div>
            
        </section>
    )
}
