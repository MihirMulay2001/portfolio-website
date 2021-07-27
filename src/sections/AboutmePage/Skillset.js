import React from 'react'
import styles from '../../styles/aboutmepage.module.css'
import Button from '../../components/Button'


export default function Skillset({theme}) {
    return (
        <section id="skillset">
            <h2>Skillset</h2>
            <div className={styles.container}>
                <div className={styles.firsthalf}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Pharetra ullamcorper eget elementum interdum felis in ut. 
                        Tellus nunc vestibulum amet fusce tortor facilisis mauris id fames. 
                        Venenatis at mauris fermentum tellus vitae scelerisque leo velit pellentesque. 
                        Et dui mattis quis sit iaculis tincidunt a.
                    </p>
                    <Button variant="outlined">
                        <a href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                        Visit my Github
                        </a>
                    </Button>
                    <Button variant="outlined">
                        <a href="#projects" >
                            <i class="fas fa-arrow-down"></i>
                            View my projects
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
