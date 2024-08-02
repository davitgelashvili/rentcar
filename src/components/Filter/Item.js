import styles from './Filter.module.css'
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <li className={styles.item}>
            <Link to={item.link} className={styles.link}>
                {item.name}
            </Link>
        </li>
    )
}
export default Item