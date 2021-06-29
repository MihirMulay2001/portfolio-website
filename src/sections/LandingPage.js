import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/landingpage.module.css'
import mainpicture from '../assets/mainpicture.png'

const copytoclipboard = async (event) =>{
    event.preventDefault();
    const el = document.createElement('textarea');
    el.value = 'mihirmulay3000@gmail.com';
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    document.getElementById('textcopied').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('textcopied').style.display = 'none';
    }, 3000)
    
}

export default function LandingPage() {
    return (
        <div className={styles.section}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.intro}>
                    <div>Hello there! I am</div>
                    <div className={styles.name}>Mihir Mulay</div>
                    <p>Frontend web developer 👩‍💻, dog lover 🐶 and meme lord 🃏</p>
                </div>
                <div className={styles.mypic}>
                    <img src= {mainpicture} alt="my pic here"/>
                </div>
                <div className={styles.links}>
                    <a className={styles.linkedin} href="https://www.linkedin.com/in/mihirmulay00/" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className={styles.github} href="https://github.com/mihirmulay2001" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className={styles.medium} href="https://medium.com/@mihirmulay3000" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-medium"></i>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a className={styles.email} href="#" onClick={copytoclipboard}>
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a className={styles.instagram} href=" https://www.instagram.com/the_lazy_geek16" target="_blank" rel="noreferrer noopener">
                        <i className="fab fa-instagram"></i>
                    </a>
                    {/* <i className="fab fa-discord"></i> */}
                </div>
            </div>
             <div className={styles.textcopied} id="textcopied">
                    Email id copied to clipboard!
                </div>
        </div>
    )
}
