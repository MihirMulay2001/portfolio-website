import React from 'react'
import styles from '../styles/aboutmepage.module.css'
import Footer from '../components/Footer'
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
            <div className={styles.academics}>
                <div className={`${styles.card} ${styles.stccard}`}>
                    <h3>Student Technical Community</h3>
                    <img src="mypic" alt="stc" />
                    <p>
                        I am proud to be a tech mentor of one of the finest student communities in India.
                    </p>
                </div>
                <div className={`${styles.card} ${styles.ymcard}`}>
                    <h3>Yuva Marathi</h3>
                    <img src="mypic" alt="Yuva Marathi" />
                    <p>
                        I am a core committee member at one of the best cultural clubs VIT has to offer.
                    </p>
                </div>
                <div className={styles.info}>
                    <p>
                        lorem ipcndkcjnd wscjwdck jdcwdckwc kqs sxasmx saxxsx axxxksxska alksa 
                    sxlaskx aasxslxk csdlkc cc ssdlckc scsc ccdlckc scldscs cscsclsdkcs cscdscldcm
                    lorem ipcndkcjnd wscjwdck jdcwdckwc kqs sxasmx saxxsx axxxksxska alksa 
                    sxlaskx aasxslxk csdlkc cc ssdlckc scsc ccdlckc scldscs cscsclsdkcs cscdscldcm
                    </p>
                    <p>
                        lorem ipcndkcjnd wscjwdck jdcwdckwc kqs sxasmx saxxsx axxxksxska alksa 
                    sxlaskx aasxslxk csdlkc cc ssdlckc scsc ccdlckc scldscs cscsclsdkcs cscdscldcm
                    lorem ipcndkcjnd wscjwdck jdcwdckwc kqs sxasmx saxxsx axxxksxska alksa 
                    sxlaskx aasxslxk csdlkc cc ssdlckc scsc ccdlckc scldscs cscsclsdkcs cscdscldcm
                    </p>
                    <a href="../assets/mainpicture.png" download>
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
