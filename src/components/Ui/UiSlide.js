import { useEffect, useState } from 'react'
import styles from './UiSlide.module.css'
const UiSlide = ({title, name, price, setPrice}) => {
    const [fixPrice, setFixPrice] = useState('')
    const [count, setCount] = useState(330)

    function change(e){
        let value = e.target.value
        setCount(value)

        // console.log(price)
        if(value > 330 && value < 750) {
            setPrice({
                ...price,
                total: 70
            })
        }else if (value < 350){
            setPrice({
                ...price,
                pickup: 50,
                total: 100
            })
        }else {
            setPrice({
                ...price,
                dropoff: 50,
                total: 100
            })
        }
    }

    // useEffect(()=>{
    //     setPrice(totalPrice)
    // }, [totalPrice])

    return (
        <label>
            <p className={styles.title}>{title}</p>
            <div className={styles.slide} style={{width: '100%'}}>
                <p className={styles.text}>{count}</p>
                <div className={styles.offwork} style={{width: '25%'}}></div>
                <div className={styles.onwork} style={{width: '25%', left: '25%'}}></div>
                <div className={styles.offwork} style={{width: '50%', left: '50%'}}></div>
                <input 
                    name={name}
                    type='range' 
                    list="values" 
                    min={0} 
                    max={1440} 
                    defaultValue={count} 
                    step={30}
                    className={styles.range}
                    onChange={e => change(e)}
                    />
            </div>
        </label>
    )
}

export default UiSlide