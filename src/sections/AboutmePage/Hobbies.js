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
                    Taking time off for yourself is essential for your physical and mental health. I enjoy a number of hobbies myself. Sci fi and horror books were always my favourite ever since I was a kid. I am a major tech enthusiast and am always excited to hear about new and cutting edge tech. I listen to a number of podcasts like waveform, vergecast and distractible and also love watching sci-fi TV series . I love travelling to new places,  interacting with people and eating different food.
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
