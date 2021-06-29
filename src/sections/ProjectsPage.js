import React from 'react'
import styles from '../styles/projectspage.module.css'
import Card from '../components/Card.js'
import data from '../data'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ProjectsPage() {
    return (
        <div id="projects" className = {styles.section}>
            <div className={styles.title}>Projects</div>
            <div>
                I often find myself trying to take a break from the busy schedule of college life.
                Working on mini projects enables me to take my mind of studies and helps in improving my developement skills
                all while also   fuelling my creativity.
            </div>
            <div>Here are some of my best projects so far</div>
            <div className={styles.cardsectiondesktop}>
                {data.projects.map((item,key)=><Card item = {item} key = {key}/>)}
            </div>
            <div className={styles.cardsectionmobile}>
                <Carousel
                    autoFocus={false}
                    autoPlay={false}
                    centerMode={true}
                    centerSlidePercentage={95}
                    interval={99999}
                >
                    {data.projects.map((item,key)=><Card item = {item} key = {key}/>)}
                </Carousel>
            </div>
            <div>
                <span>
                    <a className={styles.github} href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                        Find more on my Github
                    </a>
                </span>
            </div>
        </div>
    )
}
