import React from 'react'
import styles from "./styles.module.css"
import {Button} from "@material-ui/core"

function NewsFeed() {
    return (
        <div className={styles.NewsFeed}>
            <h3 style={{ textAlign: "center" }}>Want To Create Post?</h3>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
        </div>
    )
}

export default NewsFeed
