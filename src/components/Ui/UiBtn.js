import styles from './Ui.module.scss'

const UiBtn = ({text, onClick}) => {
    return (
        <button
            className={styles.btn}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default UiBtn