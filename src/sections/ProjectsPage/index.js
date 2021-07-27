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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras blandit cursus at euismod pellentesque vel commodo. 
                    Amet vitae elementum hendrerit ultricies senectus aenean id.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras blandit cursus at euismod pellentesque vel commodo. 
                    Amet vitae elementum hendrerit ultricies senectus aenean id.
                </p>
                <Button variant="outlined">
                    <a href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                    <i className="fab fa-github"></i>
                    Visit my Github
                    </a>
                </Button>
                <b>
                    <p className={styles.subtitle}>Here are three of my best projects</p>
                </b>
                {projects.map(project => <ProjectCard project={project} theme={theme}/>)}
            </div>
        </section>
        
    )
}
