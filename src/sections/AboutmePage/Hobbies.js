import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import hobbiesimg from '../../assets/img/hobbies.png'

export default function Hobbies({theme}) {
    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            <div className={styles.hobbies + ' ' + styles.container}>
            <div className={styles.firsthalf}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra ullamcorper eget elementum interdum felis in ut. 
                    Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                    Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                    Et dui mattis quis sit iaculis tincidunt a.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pharetra ullamcorper eget elementum interdum felis in ut. 
                    Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames.
                </p>
                <Button theme={theme} variant="outlined">
                    <i className="fab fa-discord"></i>
                    Join my discord
                </Button>
                <Button theme={theme} variant="outlined">
                    <a  href="https://medium.com/@mihirmulay3000" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-medium"></i>
                        Check out my medium
                    </a>
                </Button>
            </div>
            <div className={styles.secondhalf}>
                <img src={hobbiesimg} alt="bitmojis" />
            </div>
        </div>
        </section>
    )
}
