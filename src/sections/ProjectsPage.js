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
                Anim sunt commodo labore fugiat nostrud incididunt sint cillum magna. 
                Sit fugiat veniam quis sunt. 
                Esse cillum consectetur in tempor enim id proident quis aute.
            </div>
            <div className={styles.cardsectiondesktop}>
                {data.projects.map((item,key)=><Card item = {item} key = {key}/>)}
            </div>
            <div className={styles.cardsectionmobile}>
                <Carousel
                    autoFocus={false}
                    autoPlay={false}
                    centerMode={true}
                    centerSlidePercentage={95}
                    interval={30000}
                >
                    {data.projects.map((item,key)=><Card item = {item} key = {key}/>)}
                </Carousel>
            </div>
        </div>
    )
}
