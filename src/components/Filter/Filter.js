import styles from './Filter.module.css'
import Container from "../../module/Container/Container"
import Item from './Item'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Filter = () => {
    const {t} = useTranslation()
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    }

    const data = [
        {
            id: 23533,
            link: '/',
            name: t('filter.all'),
        },
        {
            id: 32532,
            link: '#economy',
            name: t('filter.economy'),
        },
        {
            id: 254,
            link: '#standart',
            name: t('filter.standart'),
        },
        {
            id: 4773,
            link: '#suv',
            name: t('filter.suv'),
        },
        {
            id: 35753,
            link: '#luxury',
            name: t('filter.luxury'),
        },
        {
            id: 3647432,
            link: '#convertibles',
            name: t('filter.convertibles'),
        },
        {
            id: 3264743,
            link: '#van',
            name: t('filter.van'),
        },
        {
            id: 436758,
            link: '#moto',
            name: t('filter.moto'),
        }
    ]
    return (
        <div className={styles.filter}>
            <Container>
                <ul className={styles.menu}>
                    <Slider {...settings}>
                    {
                        data.map(item=> {
                            return (
                                <Item item={item} key={item.id}/>
                            )
                        })
                    }
                    </Slider>
                </ul>
            </Container>
        </div>
    )
}

export default Filter