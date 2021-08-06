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
                            I specialize in frontend web development. 
                            I have strong fundamental knowledge in html , css and javascript. 
                            I am an expert at and have made a number of projects in it. 
                            I also know how to use state management tools like redux and have a basic knowledge of firebase. 
                            I am familiar with the basics of web design and have designed a few of my projects on designing tools like figma. 
                            Material UI is my go to UI framework for its clean and minimilistic approach.
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
