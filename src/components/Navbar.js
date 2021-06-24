import React from 'react'
import styles from '../styles/navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
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
            </div>
        </div>
    )
}
