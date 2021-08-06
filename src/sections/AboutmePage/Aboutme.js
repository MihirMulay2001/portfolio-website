import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import mypicturelight from '../../assets/img/mypicture-light.png'
import mypicturedark from '../../assets/img/mypicture-dark.png'
import myresume from '../../assets/pdf/Resume.pdf'


export default function Aboutme({theme}) {
    return (
        <>
                <div className={styles.aboutme + ' ' + styles.container}>
                    <div className={styles.firsthalf}>
                    <p>I am a budding developer who specializes in providing meaningful user experience 
                        by creating minimalistic and easy to use software interfaces. I am a third year student
                        studying Computer Science with specialization in Internet of Things at Vellore Institute of Technology, Vellore. 
                        I have quite some experience with developing software and am looking for internships to put my skills to the test.
                        I am eager to join the industry and be a part of this wonderful developers community. 
                    </p>
                    <Button theme={theme} variant="outlined">
                        <a href={myresume} download>
                            <i className="fas fa-file-download"></i>
                            Download my resume
                        </a>
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
