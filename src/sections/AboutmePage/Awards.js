import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import best_student from '../../assets/img/bitmoji_beststudent.png'
import prefect from '../../assets/img/bitmoji_prefect.png'


export default function Awards() {
    return (
        <section id="awards">
            <h2>Awards</h2>
            <div className={styles.container}>
                <div className={styles.container}>
                <div className={styles.firsthalf_award}>
                    <h3>Best outgoing student</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pharetra ullamcorper eget elementum interdum felis in ut. 
                        Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                        Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                        Et dui mattis quis sit iaculis tincidunt a.
                    </p>
                </div>
                <div className={styles.secondhalf_award}>
                    <img src={best_student} alt="certificate" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.firsthalf_award}>
                    <h3>School Prefect</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pharetra ullamcorper eget elementum interdum felis in ut. 
                        Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                        Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                        Et dui mattis quis sit iaculis tincidunt a.
                    </p>
                </div>
                <div className={styles.secondhalf_award}>
                    <img src={prefect} alt="certificate" />
                </div>
            </div>
            </div>
        </section>
    )
}
