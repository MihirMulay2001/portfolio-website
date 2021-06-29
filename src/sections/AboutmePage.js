import React from 'react'
import styles from '../styles/aboutmepage.module.css'
import Footer from '../components/Footer'
import stcicon from '../assets/mainpicture.png'
import ymicon from '../assets/mainpicture.png'
import Resume from '../assets/Resume.pdf'

export default function AboutmePage() {
    return (
        <div id="aboutme" className={styles.section}>
            <div className={styles.title}>About me</div>
            <div className={styles.desc}>
                <div className={styles.card1}>
                    <p>
                        I love to travel to new places, eat different food and meet new people.
                    </p>
                </div>
                <div className={styles.card2}>
                    <p>
                         I enjoy playing basketball, reading books and watching movies on netflix.
                    </p>
                </div>
                <div className={styles.card3}>
                    <p>
                        I am a really outgoing person and love working with people on new and exciting projects.
                    </p>
                </div>
            </div>
                <hr className={styles.separator} />
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
            <Footer />
        </div>
    )
}
