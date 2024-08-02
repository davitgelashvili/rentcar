import styles from './Ui.module.scss'

const UiSelect = ({item, inputValue, setInputValue, valueName, title}) => {
    return (
        <label>
            <p className={styles.title}>{title}</p>
            <select 
                className={styles.input}
                onChange={(e) => setInputValue({...inputValue, [valueName]: e.target.value})}
                >
                    <option>
                        შეარჩიეთ
                    </option>
                    {
                        item?.map((it)=> {
                            return (
                                <option key={it.id}>
                                    {it.title}
                                </option>
                            )
                        })
                    }
            </select>
        </label>
    )
}

export default UiSelect