import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'


export default function Achievements({theme}) {
    return (
        <section id="achievements">
            <h2>Achievements and experience</h2>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Student Technical Community</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pharetra ullamcorper eget elementum interdum felis in ut. 
                        Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                        Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                        Et dui mattis quis sit iaculis tincidunt a.
                    </p>
                    <Button variant="outlined">
                        <a href="https://www.stcvit.in" target="_blank" rel="noreferrer noopener">
                        Visit website
                        </a>
                    </Button>
                </div>
                <div className="secondhalf">
                    <img href="" alt="stc logo" />
                </div>
            </div>
            <div className={theme + ' ' + styles.container}>
                <div className={styles.firsthalf}>
                    <h3>Yuva marathi</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pharetra ullamcorper eget elementum interdum felis in ut. 
                        Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                        Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                        Et dui mattis quis sit iaculis tincidunt a.
                    </p>
                    <Button variant="outlined">
                        <a href="https://www.linkedin.com/company/yuva-marathi/about/" target="_blank" rel="noreferrer noopener">
                        Visit LinkedIn
                        </a>
                    </Button>
                </div>
                <div className="secondhalf">
                    <img href="" alt="skills" />
                </div>
            </div>
        </section>
    )
}
