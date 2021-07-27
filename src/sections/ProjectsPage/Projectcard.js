import React from 'react'
import styles from '../../styles/projectspage.module.css'
import Button from '../../components/Button'


export default function Projectcard({project, theme, position="right"}) {
    return (
        <div className={styles.cardcontainer}>
            <div className={styles.firsthalf}>
                <img src={project.img} alt="project"/>
            </div>
            <div className={styles.secondhalf}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <Button variant="contained" theme={theme} icon="right">
                    <a href={project.url} target="_blank" rel="noreferrer noopener">
                        Visit website
                        <i class="fas fa-arrow-down"></i>
                    </a>
                </Button>
                <Button variant="outlined" theme={theme}>
                    <a href={project.url} target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                        View source code
                    </a>
                </Button>
            </div>
        </div>
    )
}
