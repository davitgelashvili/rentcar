import { CircularProgress } from '@mui/material'
import styles from './Ui.module.scss'
import { useEffect } from 'react'

const UiBtn = ({text, onClick, progress}) => {
    return (
        <button
            className={styles.btn}
            onClick={onClick}>
                {progress ? <CircularProgress /> : text}
        </button>
    )
}

export default UiBtn