import { isBrowser, isMobile } from 'react-device-detect'
import UiNumber from '../Ui/UiNumber'
import styles from './Detail.module.scss'
import FormSectionTitle from './FormSectionTitle'
import UiBtn from '../Ui/UiBtn'
import { useTranslation } from 'react-i18next'

const Cost = ({item, price, setPrice, inputValue, setInputValue, activeBookForm, setActiveBookForm, sendBook, progress}) => {
    const {t} = useTranslation()
    function handleClick(){
        setActiveBookForm(true)
    }

    return (
        <div className={styles.cost}>
            <FormSectionTitle title={'COST'}/>
            <h3 className={styles.price}>Rent for 1 day {item.Price}$</h3>
            <div className={styles.footer}>
                <div>
                    <UiNumber 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        valueName={'dayCount'}
                        title={isBrowser && 'დღეების რაოდენობა'}/>
                    {isBrowser && <FormSectionTitle title={`Total ${price.total*inputValue.dayCount}$`}/>}
                </div>
                <UiBtn 
                    text={isBrowser ? t('ui.btnText') : `Total ${price.total*inputValue.dayCount}$`}
                    onClick={activeBookForm ? sendBook : handleClick }
                    progress={progress}/>
            </div>
        </div>
    )
}

export default Cost