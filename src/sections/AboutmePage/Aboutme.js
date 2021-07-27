import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'


export default function Aboutme({theme}) {
    return (
        <>
            <div className={styles.aboutme + ' ' + styles.container}>
            <div className={styles.firsthalf}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pharetra ullamcorper eget elementum interdum felis in ut. 
                Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames.
                Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                Et dui mattis quis sit iaculis tincidunt a.
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
            <div className={styles.secondhalf}><img src="" alt="about me" /></div>
        </div>
        </>
    )
}
