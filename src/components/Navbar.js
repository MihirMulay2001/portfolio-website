import React from 'react'
import styles from '../styles/navbar.module.css'
import curtain from '../assets/curtaindesktop.svg'
export default function Navbar() {
    return (
        <div 
            className={styles.navbar} 
            style={{backgroundImage: `url(${curtain})`}}
        >
            <div className={styles.picture}>
                MM
            </div>
            <div className={styles.links}>
                <a href="#projects">
                    Projects
                </a>
                <a href="#aboutme">
                    About me
                </a>
                <a className={styles.resume} href="../assets/mainpicture.png" download>
                    <i className="fas fa-file-download"></i>
                    My resume
                </a>
            </div>
        </div>
    )
}
