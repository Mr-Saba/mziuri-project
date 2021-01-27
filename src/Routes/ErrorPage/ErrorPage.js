import React from 'react'
import styles from './styles.module.css'

function ErrorPage() {
    return (
        <div className={styles.ErrorMessage}>
            404 error (page not found)
        </div>
    )
}

export default ErrorPage
