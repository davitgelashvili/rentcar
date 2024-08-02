import styles from './Detail.module.scss'
import Cost from './Cost'
import ItemCopver from '../ItemCover/ItemCover'
import { isBrowser } from 'react-device-detect'

const Right = ({item, activeBookForm, setActiveBookForm, sendBook, price, setPrice, inputValue, setInputValue, progress}) => {

    return (
        <div className={styles.right}>
            {isBrowser && <ItemCopver item={item}/>}
            <Cost 
                price={price} 
                setPrice={setPrice} 
                item={item} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
                activeBookForm={activeBookForm}
                setActiveBookForm={setActiveBookForm}
                sendBook={sendBook}
                progress={progress}/>
        </div>
    )
}

export default Right