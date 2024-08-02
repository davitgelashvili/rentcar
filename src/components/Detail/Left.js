import { isMobile } from "react-device-detect"
import GallerySlider from "../GallerySlider/GallerySlider"
import ItemCopver from "../ItemCover/ItemCover"
import styles from './Detail.module.scss'
import DetailList from "./DetailList"

const Left = ({item}) => {
    return (
        <div className={styles.left}>
            <h1>{item.make} {item.model} <span>({item.year})</span></h1>
            {isMobile && <ItemCopver item={item}/>}
            <DetailList item={item}/>
            <GallerySlider item={item.gallery} className={styles.gallery} />
        </div>
    )
}

export default Left