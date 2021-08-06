import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import hobbiesimg from '../../assets/img/hobbies.png'
import FadeInWhenVisible from '../../components/Animation_fadein'


export default function Hobbies({theme}) {
    return (
        <section id="hobbies">
            <h2>Hobbies</h2>
            <FadeInWhenVisible>
                <div className={styles.hobbies + ' ' + styles.container}>
                    <div className={styles.firsthalf}>
                        <p>
                            Taking time off for yourself is essential for your physical and mental health. 
                            I enjoy a number of hobbies myself. <br/> I am a major tech enthusiast. I am always excited to hear about new 
                            and cutting edge tech and enjoy listening to a number of podcasts like waveform, devcast and vergecast.
                            Sci fi and horror books were always my favourite ever since I was a kid. 
                            I have taken up a hobby of writing articles to keep me entertained.
                            I also enjoy watching sci-fi and action TV shows. 
                            I love travelling to new places,eating different food and interacting with new people.<br/>
                            I am open to having deep 12am conversations about literally any topic. Drop into my discord and say hi!
                        </p>
                        <Button theme={theme} variant="outlined">
                            <a href="https://discord.gg/namKAkHeMW" target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-discord"></i>
                                Join my discord server
                            </a>
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
        </FadeInWhenVisible>
        </section>
    )
}
