import React from 'react'
import styles from '../../styles/projectspage.module.css'
import Button from '../../components/Button'
import projectsdata from '../../data/index'
import ProjectCard from './Projectcard'

export default function Projects({theme}) {
    const projects = projectsdata.projects;
    return (
        <section id="projects">
            <div className={styles.section}>
                <h1>Projects</h1>
                <p>
                    In the short two years since I learned software development I have managed to make a number of different projects. I find working on projects as the best way to take my mind off the hectic college life.
                </p>
                <Button variant="outlined">
                    <a href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                    <i className="fab fa-github"></i>
                    Visit my Github
                    </a>
                </Button>
                <b>
                    <p className={styles.subtitle}>Here are few of my best projects</p>
                </b>
                {projects.map((project, key) => <ProjectCard key={key} project={project} theme={theme} position={ key%2 === 0 ? "left" : "right"}/>)}
            </div>
        </section>
        
    )
}
