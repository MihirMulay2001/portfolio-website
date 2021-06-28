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
                Aliquip voluptate anim dolore mollit cupidatat pariatur voluptate quis nulla
                 minim aliqua non. Sunt aliquip officia exercitation anim do laborum do non anim. 
                
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
