import { useEffect, useRef, useState } from "react"
import dataModule from "../CarList/data.module"
import { useLocation } from "react-router-dom"
import Container from "../../module/Container/Container"
import Left from "./Left"
import Right from "./Right"
import styles from './Detail.module.scss'
import BookForm from "./BookForm"
import emailjs from '@emailjs/browser';

const CarDetail = () => {
    const [price, setPrice] = useState({
        pickup: '',
        dropoff: '',
        total: ''
    })
    const [item, setItem] = useState([])
    const [activeBookForm, setActiveBookForm] = useState(false)
    const [inputValue, setInputValue] = useState({})
    let url = useLocation()
    url = url.pathname.split('/')
    useEffect(()=>{
        const filtered = dataModule?.filter(it => {
            if(it.id == url[1]){
                return it
            }
        })
        setItem(...filtered)
        setInputValue({
            carId: item.id,
            pickupLocal: '',
            dropoffLocal: '',
            fullname: '',
            mobile: '',
            startDate: new Date(),
            dayCount: '1',
            price: item.Price,
            totalPrice: item.Price,
        })
        setPrice({
            ...price,
            total: item.Price
        })
    }, [item])

    const form = useRef();

    const sendBook = (e) => {
      e.preventDefault();

      emailjs
        .send('service_ijcrtjv', 'template_g14c74m', inputValue, {
            publicKey: 'YD0RbkfkM-DyGjWAS',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text, error);
            },
        );
    };
    
    return (
        <Container>
            <div className={styles.detail}>
                {
                    !activeBookForm && <Left item={item} />
                }
                {
                    activeBookForm && (
                        <BookForm 
                            inputValue={inputValue} 
                            setInputValue={setInputValue} 
                            form={form}
                            price={price}
                            setPrice={setPrice}/>
                    )
                }
                <Right 
                    inputValue={inputValue} 
                    setInputValue={setInputValue} 
                    item={item} 
                    setActiveBookForm={setActiveBookForm} 
                    activeBookForm={activeBookForm} 
                    sendBook={sendBook}
                    price={price}
                    setPrice={setPrice}/>
            </div>
        </Container>
    )
}

export default CarDetail