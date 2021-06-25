import React from 'react'
import styles from '../styles/card.module.css'

export default function Card({item}) {
    return (
        <div className={styles.card}>
            <a href={item.url} target="_blank" rel="noreferrer noopener"> </a>
            <div className={styles.image} style={{backgroundImage:`url("${item.img}")`}}>
                
            </div>
            <div className={styles.description}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
        </div>
    )
}
