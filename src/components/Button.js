import React from 'react'
import styles from '../styles/button.module.css'

export default function Button({variant,theme, children, icon="left"}) {
    return (
        <div className={styles.btn}>
            <button className={theme + ' ' + styles[variant] + ' ' + styles.button + ' ' + styles[icon]}>
                {children}
            </button>
        </div>
    )
}
