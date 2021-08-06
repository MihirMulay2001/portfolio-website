import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'
import skillsetimg from '../../assets/img/skillset.png'
import FadeInWhenVisible from '../../components/Animation_fadein'


export default function Skillset({theme}) {
    return (
        <section id="skillset">
            
            <div className={styles.section}>
                <h2>Skillset</h2>
            <FadeInWhenVisible>
                <div className={styles.container}>
                    <div className={styles.firsthalf}>
                        <p>
                            I specialize in frontend web development.<br />
                            I have strong fundamental knowledge in html , css and javascript. <br/>
                            I am an expert at React and have made a number of projects in it. <br/>
                            I also know how to use state management tools like redux, UI frameworks like material UI and 
                            have a general knowledge of services like firebase. <br/>
                            I am familiar with the basics of web design and have designed a few of my projects on designing tools like figma. <br />
                            I understand the importance of maintaining code and always make it a habit to write clean, concise
                            and programmer friendly code.
                        </p>
                        <Button variant="outlined">
                            <a href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-github"></i>
                            Visit my Github
                            </a>
                        </Button>
                        <Button variant="outlined">
                            <a href="#projects" >
                                <i className="fas fa-arrow-down"></i>
                                View my projects
                            </a>
                        </Button>
                    </div>
                    <div className={styles.secondhalf} >
                        <img src={skillsetimg} alt="skills" />
                    </div>
                </div>
                </FadeInWhenVisible>
            </div>
            
        </section>
        
    )
}
