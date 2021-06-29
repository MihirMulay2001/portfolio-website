import React from 'react'
import styles from '../styles/footer.module.css'
import curtaindesktop from '../assets/endcurtaindesktop.svg'

export default function Footer() {
    return (
        <div style={{backgroundImage: `url(${curtaindesktop})`}} className={styles.section}>
            <div className={styles.info}>
                <div>
                    <i className="fas fa-envelope"></i>
                    Email : mihirgirish3000@gmail.com
                </div>
                <div>
                    <i className="fas fa-home"></i>
                    Address: Bangalore, Karnataka, India
                </div>
            </div>
            <div className={styles.credits}>
                <span>Made with  <i className="fas fa-heart"></i>by me</span>
            </div>
            <div className={styles.links}>
                <div>Connect with me on</div>
                <div className={styles}>
                    <a className={styles.linkedin} href="https://www.linkedin.com/in/mihirmulay00/" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className={styles.github} href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className={styles.medium} href="https://medium.com/@mihirmulay3000" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-medium"></i>
                    </a>
                    <a className={styles.instagram} href=" https://www.instagram.com/the_lazy_geek16" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>          
        </div>
    )
}
