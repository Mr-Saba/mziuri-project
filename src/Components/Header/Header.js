import React from 'react'
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className={styles.Container}>
            <div className={styles.Items}>
                <div> <Link style={{ textDecoration: "none" }} to="/About">  About </Link>  </div>
                <div className={styles.WebsiteName}>SocWeb</div>
                <div> <Link style={{ textDecoration: "none" }} to="/">  Log out </Link>  </div>
            </div>
        </div>
    )
}

export default Header
