import React from 'react'
import styles from '../styles/navbar.module.css'
import curtain from '../assets/curtaindesktop.svg'
import Resume from '../assets/Resume.pdf'
export default function Navbar() {
    return (
        <div 
            className={styles.navbar} 
            style={{backgroundImage: `url(${curtain})`}}
        >
            <div className={styles.picture}>
                {/*eslint-disable-next-line */}
                <a href="#">
                    MM
                </a>
            </div>
            <div className={styles.links}>
                <a href="#projects">
                    Projects
                </a>
                <a href="#aboutme">
                    About me
                </a>
                <a className={styles.resume} href={Resume} download="Mihir's Resume">
                    <i className="fas fa-file-download"></i>
                    My resume
                </a>
            </div>
        </div>
    )
}
