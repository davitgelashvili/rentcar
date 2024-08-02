import styles from './CarList.module.css'
import { useEffect, useState } from "react"
import dataModule from "./data.module"
import Item from "./Item/Item"
import Container from '../../module/Container/Container'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CarList = () => {
    const [data, setData] = useState([])
    const url = useLocation()
    const {t} = useTranslation()

    useEffect(()=>{
        if(url.hash){
            const filtered = dataModule?.filter(item => item.class === url.hash && item)
            setData(filtered)
        }else {
            setData(dataModule)
        }
    }, [url.hash])
    
    return (
        <Container>
            <div className={styles.list}>
                {
                 data && data.length ? (
                    data.map((item)=>{
                        return (
                            <Item 
                                key={item.id} 
                                item={item}
                                />
                        )
                    })
                 ) : (
                    <h1>{t('notfound.car')}</h1>
                 )
                }
            </div>
        </Container>
    )
}

export default CarList