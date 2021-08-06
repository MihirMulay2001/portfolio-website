import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import mypicturelight from '../../assets/img/mypicture-light.png'
import mypicturedark from '../../assets/img/mypicture-dark.png'

export default function Aboutme({theme}) {
    return (
        <>
                <div className={styles.aboutme + ' ' + styles.container}>
                    <div className={styles.firsthalf}>
                    <p>I am a third year student studying Computer Science with specialization in Internet of Things at Vellore Institute of Technology, Vellore.
                    I have quite some experience with developing software and am eager to join the industry and be a part of this rapidly growing tech revolution. 
                    </p>
                    <Button theme={theme} variant="outlined">
                        <i className="fas fa-file-download"></i>
                        Download my resume
                    </Button>
                    <Button theme={theme} variant="outlined">
                        <a  href="https://www.linkedin.com/in/mihirmulay00/" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-linkedin"></i>
                            Check out my LinkedIn
                        </a>
                    </Button>
                </div>
                <div className={styles.secondhalf}>
                    <img src={theme === 'light' ? mypicturelight : mypicturedark} alt="about me" />
                </div>
                </div>
        </>
    )
}
