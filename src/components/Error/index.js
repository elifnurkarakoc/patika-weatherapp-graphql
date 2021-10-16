import React from 'react'
import styles from "./index.module.css"
const Error = ({error}) => {
    return (
        <div className={styles}>
            Error {error}
        </div>
    )
}

export default Error
