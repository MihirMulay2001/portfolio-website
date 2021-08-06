import React from 'react'
import styles from '../../styles/footer.module.css'
import Animation from '../../components/Animation_slidein'
export default function Footer({theme}) {
    return (
        <div className={styles.section + ' ' + styles[theme]}>
            <div className={styles.credits}>
                <div>Made with <i className="fas fa-heart"></i> by me</div>
            </div>
            <div className={styles.details}>
                <div>
                    <div className={styles.label}>Email</div>
                    mihirmulay3000@gmail.com
                </div>
                <div>
                    <div className={styles.label}>Address</div>
                    Bengaluru, Karnataka, India.
                </div>
            </div>
            <Animation>
            <div className={styles.links}>
                <h3>connect with me on</h3>
                <ul type="none">
                    <li>
                        <a href="https://www.linkedin.com/in/mihirmulay00/" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-linkedin"></i>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a  href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-github"></i>
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@mihirmulay3000" target="_blank" rel="noreferrer noopener">
                            <i className="fab fa-medium"></i>Medium
                        </a>
                    </li>
                    <li>
                        <div className={styles.label}>Discord</div>
                        <i className="fab fa-discord"></i>MiAloo#5199
                    </li>
                    <li>
                        <div className={styles.label}>Penguin Isle</div>
                        <i className="fas fa-gamepad"></i>61dkrf9b32u
                    </li>
                </ul>
            </div>
            </Animation>
        </div>
    )
}
