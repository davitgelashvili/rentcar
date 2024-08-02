import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import styles from './Gallery.module.scss'

const GallerySlider = ({item, className}) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className={className}>
            {
                item?.map((it, key) => {
                    return (
                        <figure className={styles.cover}  key={it+key}>
                            <img src={it} alt="cover" className={styles.img}/>
                        </figure>
                    )
                })
            }
        </Slider>
    )
}

export default GallerySlider