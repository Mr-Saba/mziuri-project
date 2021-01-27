import React from 'react'
import styles from "./styles.module.css"
function Layout(props) {
    return (
        <div className={styles.Layout}>{props.children}</div>
    )
}

export default Layout
