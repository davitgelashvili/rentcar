import { isMobile } from "react-device-detect"
import GallerySlider from "../GallerySlider/GallerySlider"
import ItemCopver from "../ItemCover/ItemCover"
import styles from './Detail.module.scss'
import DetailList from "./DetailList"
import ArrowBackIos from "@mui/icons-material/ArrowBackIos"
import { Link, useNavigate } from "react-router-dom"

const Left = ({item}) => {
    const history = useNavigate()
    return (
        <div className={styles.left}>
            <Link to={'/'} className={styles.back_btn}><ArrowBackIos /><span>go home</span></Link>
            <h1>{item.make} {item.model} <span>({item.year})</span></h1>
            {isMobile && <ItemCopver item={item}/>}
            <DetailList item={item}/>
            <GallerySlider item={item.gallery} className={styles.gallery} />
        </div>
    )
}

export default Left