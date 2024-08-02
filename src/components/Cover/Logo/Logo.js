import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src="https://localrent.com/assets/logo_white_en-e7247cced448200c54f3f5192458ee0e.svg" alt="logo" />
        </div>
    )
}

export default Logo