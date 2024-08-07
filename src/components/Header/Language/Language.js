import { useTranslation, Trans } from 'react-i18next';
import i18n from '../../../i18n/i18n';
import { siteTranslateAction } from '../../../store/translate';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from './Language.module.scss'

const Language = () => {
    const dispatch = useDispatch()
    const {language} = useSelector((state) => state.translate)

    useEffect(()=>{
        i18n.changeLanguage(language)
    }, [dispatch, language])
    
    return (
        <div>
            <button 
                value={`${language === 'en' ? 'ka': 'en'}`}
                className={styles.btn}
                onClick={(e) => {
                    dispatch(siteTranslateAction.changeLanguage(e.target.value))
                }}>
                {language === 'en' ? 'ქარ': 'ENG'}
            </button>
        </div>
    )
}

export default Language