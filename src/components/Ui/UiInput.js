import styles from './Ui.module.scss'

const UiInput = ({item, inputValue, setInputValue}) => {
    return (
        <label>
            <p className={styles.title}>{item.title}</p>
            <input 
                className={styles.input}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder} 
                onChange={(e) => setInputValue({...inputValue, [item.name]: e.target.value})}
                />  
        </label>
    )
}

export default UiInput