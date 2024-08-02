import { isBrowser, isMobile } from 'react-device-detect'
import UiNumber from '../Ui/UiNumber'
import styles from './Detail.module.scss'
import FormSectionTitle from './FormSectionTitle'
import UiBtn from '../Ui/UiBtn'
import { useTranslation } from 'react-i18next'

const Cost = ({item, price, setPrice, inputValue, setInputValue, activeBookForm, setActiveBookForm, sendBook}) => {
    const {t} = useTranslation()
    function handleClick(){
        setActiveBookForm(true)
    }

    return (
        <div className={styles.cost}>
            <FormSectionTitle title={'COST'}/>
            <h3 className={styles.price}>Rent for 1 day {item.Price}$</h3>
            {isBrowser && (
                <div className={styles.section}>
                    <UiNumber 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        valueName={'dayCount'}
                        title={'დღეების რაოდენობა'}/>
                </div>
            )}
            {
                price.pickup && (
                    <>
                    <h2>Delivery</h2>
                    <h3>At pick-up{price.pickup}$</h3>
                    </>
                )
            }
            {
                price.dropoff && (
                    <>
                    <h3>At drop-off{price.dropoff}$</h3>
                    </>
                )
            }
            {isBrowser && (
                <>
                <FormSectionTitle title={`Total ${price.total*inputValue.dayCount}$`}/>
                    <UiBtn 
                        text={t('ui.btnText')}
                        onClick={activeBookForm ? sendBook : handleClick }
                        />
                </>
            )}
            {isMobile && (
                <div className={styles.footer}>
                    <UiNumber 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        valueName={'dayCount'}/>
                    <UiBtn 
                        text={t('ui.btnText')}
                        onClick={activeBookForm ? sendBook : handleClick }
                        />
                </div>

            )}
        </div>
    )
}

export default Cost