import React from 'react'
import styles from '../styles/aboutmepage.module.css'
import Footer from '../components/Footer'
import stcicon from '../assets/mainpicture.png'
import ymicon from '../assets/mainpicture.png'
import Resume from '../assets/Resume.pdf'
import vacation1 from '../assets/vacation1img.jpeg'
import vacation2 from '../assets/vacation2img.jpeg'
import moviesimg from '../assets/moviesimg.jpeg'
import hmu from '../assets/hmuimg.jpeg'
import reading from '../assets/readingimg.jpeg'


export default function AboutmePage() {
    return (
        <div id="aboutme" className={styles.section}>
            <div className={styles.title}>About me</div>
            <div className={styles.academics + ' ' + styles.desktop}>
                <div className={`${styles.card} ${styles.stccard}`}>
                    <h3>Student Technical Community</h3>
                    <img src={stcicon} alt="stc icon here" />
                    <p>
                        I am proud to be a tech mentor of one of the finest student communities in India.
                    </p>
                </div>
                <div className={`${styles.card} ${styles.ymcard}`}>
                    <h3>Yuva Marathi</h3>
                    <img src={ymicon} alt="YM icon here" />
                    <p>
                        I am a core committee member at one of the best cultural clubs VIT has to offer.
                    </p>
                </div>
                <div className={styles.info}>
                    <p>
                        I am a third year student at Vellore Institute of Technology, Vellore.
                        I am studying Computer Science Engineering with specialisation in Internet of Things.
                        I finish my 10th in ICSE board from Bangalore.
                    </p>
                    <p>
                        I have been learning Web Development for the past 2 years.
                        This unexpected pandemic gave me a lot of time to work on my programming skills.
                        I am fluent in <b>HTML</b>, <b>JavaScript</b> and <b>CSS</b>.
                        I have mastered React JS to a considerable extend and have done a number of projects in it. 
                    </p>
                    <a href={Resume} download="Mihir's Resume">
                        <button>
                            <i className="fas fa-file-download"></i>
                            Download resume
                        </button>
                    </a>
                </div>
            </div>
            <div className={styles.academics + ' ' + styles.mobile}>
                <div>
                    <div>
                        <img src={stcicon} alt="Stc icon here" />
                        <span>
                        I am proud to be a tech mentor of one of the finest student communities in India.
                        </span>
                    </div>
                    <hr />
                    <div>
                        <img src = {ymicon} alt = "YM icon here" />
                        <span>
                        I am a core committee member at one of the best cultural clubs VIT has to offer.
                        </span>
                    </div>
                </div>
                <div className={styles.info}>
                    <p>
                        I am a third year student at Vellore Institute of Technology, Vellore.
                        I am studying Computer Science Engineering with specialisation in Internet of Things.
                        I finish my 10th in ICSE board from Bangalore.
                    </p>
                    <p>
                        I have been learning Web Development for the past 2 years.
                        This unexpected pandemic gave me a lot of time to work on my programming skills.
                        I am fluent in <b>HTML</b>, <b>JavaScript</b> and <b>CSS</b>.
                        I have mastered React JS to a considerable extend and have done a number of projects in it. 
                    </p>
                    <a href={Resume} download="Mihir's Resume">
                        <button>
                            <i className="fas fa-file-download"></i>
                            Download resume
                        </button>
                    </a>
                </div>
            </div>
                <hr className={styles.separator} />
            <div className={styles.desc}>
                <img className={styles.vacation1} src={vacation1} alt="vacation" />
                <img className={styles.vacation2} src={vacation2} alt="vacation" />
                <img className={styles.hmu} src={hmu} alt="vacation" />
                <img className={styles.reading} src={reading} alt="vacation" />
                <img className={styles.movies} src={moviesimg} alt="vacation" />
                <p>
                    I love to travel to new places, eat different food and meet new people.
                </p>
                <p>
                        I enjoy playing basketball, reading books and watching movies on netflix.
                </p>
                <p>
                    I am a really outgoing person and love working with people on new and exciting projects.
                </p>
            </div>
            <Footer />
        </div>
    )
}
