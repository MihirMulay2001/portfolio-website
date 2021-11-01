import React from 'react'
import myresume from '../../assets/pdf/Resume.pdf'
import styles from '../../styles/navbar.module.css'

const toggleTheme = (e,setTheme) => {
    e.preventDefault();
    setTheme ( theme => (theme === 'light' ? 'dark' : 'light'))
}

export default function Navbar({theme, setTheme}) {
    return (
        <div className={theme + ' ' + styles.navbar + ' ' + styles[theme]}>
            <div 
            className={styles.toggleTheme} 
            onDoubleClick={(e)=>{toggleTheme(e,setTheme)}}
            >
               <a href="#home">MM</a>
            </div>
            <div className={styles.links}>
                <ul type="none">
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#skillset">Skillset</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li className={styles.resume}>
                        <a href={myresume} target="_blank" rel="noreferrer noopener">
                            <i className="fas fa-file"></i>
                            My resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
