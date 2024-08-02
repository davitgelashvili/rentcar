import styles from './../CarList.module.css'
import { Link } from "react-router-dom"
import GallerySlider from "../../GallerySlider/GallerySlider";
import TextBody from "./TextBody";
import ItemCopver from '../../ItemCover/ItemCover';

const Item = ({item}) => {

    return (
        <li className={styles.item}>
            <Link className={styles.link} to={`/${item.id}`}>
                <ItemCopver item={item} />
                <TextBody item={item}/>
            </Link>
        </li>
    )
}

export default Item