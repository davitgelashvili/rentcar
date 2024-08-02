import { useTranslation } from 'react-i18next'
import styles from './Title.module.css'

const Title = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.title}>
            <h1 className={styles.text}>
                {t('header.title')}
            </h1>
        </div>
    )
}

export default Title