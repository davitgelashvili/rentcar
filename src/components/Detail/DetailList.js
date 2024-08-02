import styles from './Detail.module.scss'

const DetailList = ({item}) => {
    return (
        <>
            <h1 className={styles.section_title}>Specifications</h1>
            <ul className={styles.list}>
                <li>
                    <p>L100km:</p>
                    <span>{item.L100km}</span>
                </li>
                <li>
                    <p>cylinders:</p>
                    <span>{item.cylinders}</span>
                </li>
                <li>
                    <p>Engine:</p>
                    <span>{item.Engine}</span>
                </li>
                <li>
                    <p>drive:</p>
                    <span>{item.drive}</span>
                </li>
                <li>
                    <p>fuel_type:</p>
                    <span>{item.fuel_type}</span>
                </li>
                <li>
                    <p>transmission:</p>
                    <span>{item.transmission}</span>
                </li>
            </ul>
        </>
    )
}

export default DetailList