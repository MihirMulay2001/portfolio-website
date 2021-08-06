import React from 'react'
import styles from '../../styles/projectspage.module.css'
import Button from '../../components/Button'
import ecommercewebsite from '../../assets/img/ecommerce.png'
import portfoliowebsite from '../../assets/img/portfolio.png'
import weatherwebsite from '../../assets/img/weatherforecast.png'
import FadeInWhenVisible from '../../components/Animation_fadein'


const projectImg = {
    "Portfolio Website": portfoliowebsite,
    "E-commerce Website" : ecommercewebsite,
    "Weather forecast" : weatherwebsite
}


export default function Projectcard({project, theme, position="right"}) {
    return (
        <div className={styles.cardcontainer + ' ' + styles[position]}>
            <div className={styles.firsthalf}>
                <img src={projectImg[project.title]} alt="project"/>
            </div>
            <div className={styles.secondhalf}>
                <FadeInWhenVisible>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <p className={styles.techStack}>
                    {project.techStack.map((tech,key) => <span key={key} className={styles.tech}>{tech}</span>)}
                </p>
                <Button variant="contained" theme={theme} icon="right">
                    <a href={project.urlWebsite} target="_blank" rel="noreferrer noopener">
                        Visit website
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </Button>
                <Button variant="outlined" theme={theme}>
                    <a href={project.urlSource} target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                        View source code
                    </a>
                </Button>
                </FadeInWhenVisible>
            </div>
        </div>
    )
}
