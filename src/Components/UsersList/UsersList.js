import React from 'react'
import styles from "./styles.module.css"
import {Link} from 'react-router-dom'
function UsersList() {
    return (
        <div className={styles.UsersList}>
            <h3>Users List:</h3>
            <p><Link to="">{localStorage.getItem("123")}</Link></p>
        </div>
    )
}

export default UsersList
