import styles from './Ui.module.scss'

const UiNumber = ({inputValue, setInputValue, title, valueName}) => {
    function dakleba(){
        if(inputValue.dayCount > 1) {
            setInputValue(
                {
                    ...inputValue, 
                    [valueName]: inputValue.dayCount - 1,
                    totalPrice: inputValue.price * (inputValue.dayCount - 1)
                }
            )
        }
    }
    function metoba(){
        setInputValue(
            {
                ...inputValue, 
                [valueName]: Number(inputValue.dayCount) + Number(1),
                totalPrice: inputValue.price * (Number(inputValue.dayCount) + Number(1))
            }
        )
    }

    return (
        <div>
            {title && <p className={styles.title}>{title}</p>}
            <div className={styles.number}>
                <button 
                    className={styles.number_btn}
                    onClick={dakleba}>
                        -
                </button>
                <input 
                    className={styles.number_input}
                    value={inputValue.dayCount}
                    onChange={(e) => setInputValue({...inputValue, [valueName]: e.target.value})}
                    />  
                <button 
                    className={styles.number_btn}
                    onClick={metoba}>
                        +
                </button>

            </div>
        </div>
    )
}

export default UiNumber