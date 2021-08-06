import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import stcvitlogo from '../../assets/img/stcvitlogo.png'
import ymvitlogo from '../../assets/img/ymvitlogo.png'
import FadeInWhenVisible from '../../components/Animation_fadein'



export default function Achievements({theme}) {
    return (
        <section id="achievements">
            <div className={styles.section}>
                <h2>Achievements and experience</h2>
            <FadeInWhenVisible>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Student Technical Community</h3>
                    <p>
                        I am currently a Tech Mentor at STC VIT. 
                        I love working with this group
                         of brilliant, like minded people on 
                         various open source projects. Mentoring and guiding 
                         juniors into the world of dev has been an 
                         amazing experience and it also helped me to strengthen 
                         my fundamentals. This club has taught me more than any course 
                        or book has and I thankful to all the members who helped me on 
                        my dev journey.
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
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Yuva marathi</h3>
                    <p>
                        Never have I ever worked with such a big group of enthusiastic, hardworking and
                        dertermined people. This club always has something up it's sleeve, be it a dance, drama or musical event.
                        From finding out innovative ways to publicize an event, to getting sponsors,
                        I have learnt a lot about event planning and organization from this club..
                        This club feels like one big family and will always hold a special place in my heart.
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
            </FadeInWhenVisible>
            </div>
            
        </section>
    )
}
