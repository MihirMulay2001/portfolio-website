import React from 'react'
import Aboutme from './Aboutme'
import Skillset from './Skillset'
import Achievements from './Achievements'
import Awards from './Awards'
import Hobbies from './Hobbies'
import styles from '../../styles/aboutmepage.module.css'

export default function Index({theme}) {
    return (
        <section id="aboutme">
        <div className={styles.section}>
            <h1>About me</h1>
            <Aboutme theme={theme} />
            <Skillset theme={theme} />
            <Achievements theme={theme} />
            <Awards theme={theme} />
            <Hobbies theme={theme} />
        </div>
        </section>
    )
}
