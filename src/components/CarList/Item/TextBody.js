import styles from './../CarList.module.css'

const TextBody = ({item}) => {

    return (
        <div className={styles.body}>
            <h1 className={styles.title}>
                {item.make} {item.model}
            </h1>
            <p className={styles.foo}>
                <span>
                    {item.transmission},
                </span>
                <span>
                    {item.L100km}
                </span>
            </p>
            <h2 className={styles.price}><sup>$</sup>{item.Price} a day</h2>
        </div>
    )
}

export default TextBody