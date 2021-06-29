import React from 'react'
import styles from '../styles/card.module.css'
import PortfolioWebsite from '../assets/PortfolioWebsiteScreenshot.png'
import WeatherForecast from '../assets/WeatherForecastScreenshot.png'

function choosescreenshot(img){
    switch(img){
        case 'PortfolioWebsite' : return PortfolioWebsite;
        case 'WeatherForecast' : return WeatherForecast;
        default: return 'https://source.unsplash.com/random'
    }
}


export default function Card({item}) {
    return (
        <div className={styles.card}>
            <a href={item.url} target="_blank" rel="noreferrer noopener"> </a>
            <div className={styles.image}>
                <img src={choosescreenshot(item.img)} alt="Screenshot here" />
            </div>
            <div className={styles.description}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}
