import styles from './ItemCover.module.css'

const ItemCopver = ({item}) => {
    return (
        <figure className={styles.cover}>
            <img src={item.image} alt="cover" className={styles.img}/>
        </figure>
    )
}

export default ItemCopver