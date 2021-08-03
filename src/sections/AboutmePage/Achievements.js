import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import stcvitlogo from '../../assets/img/stcvitlogo.png'
import ymvitlogo from '../../assets/img/ymvitlogo.png'


export default function Achievements({theme}) {
    return (
        <section id="achievements">
            <div className={styles.section}>
                <h2>Achievements and experience</h2>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Student Technical Community</h3>
                    <p>
                        I am currently a Tech Mentor at STC VIT. 
                        This club has taught me more than any course 
                        or book has. I love working with this group
                         of brilliant and like minded people on 
                         complex projects. Mentoring and guiding 
                         juniors into the world of dev has been an 
                         amazing experience and it  also helped me to 
                         then my fundamentals. The technical events that we 
                         frequently host gave me an insight into the process 
                         goes behind planning an event. 
                    </p>
                    <Button variant="outlined">
                        <a href="https://www.stcvit.in" target="_blank" rel="noreferrer noopener">
                        Visit website
                        </a>
                    </Button>
                </div>
                <div className={styles.secondhalf}>
                    <img src={stcvitlogo} alt="stc logo" />
                </div>
            </div>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Yuva marathi</h3>
                    <p>
                        This club taught me everything I know about conducting an event.
                        From finding out innovative ways to publicize an event, to getting sponsors,
                        all necessary skills are developed when one is part of this club. This club felt like 
                        family and helped me improve my communication skills. 
                    </p>
                    <Button variant="outlined">
                        <a href="https://www.linkedin.com/company/yuva-marathi/about/" target="_blank" rel="noreferrer noopener">
                        Visit LinkedIn
                        </a>
                    </Button>
                </div>
                <div className={styles.secondhalf}>
                    <img src={ymvitlogo} alt="skills" />
                </div>
            </div>
            </div>
            
        </section>
    )
}
