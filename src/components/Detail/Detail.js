import { useEffect, useRef, useState } from "react"
import dataModule from "../CarList/data.module"
import { useLocation } from "react-router-dom"
import Container from "../../module/Container/Container"
import Left from "./Left"
import Right from "./Right"
import styles from './Detail.module.scss'
import BookForm from "./BookForm"
import emailjs from '@emailjs/browser';
import { Alert, AlertTitle } from "@mui/material"

const CarDetail = () => {
    const [success, setSuccess] = useState(false)
    const [progress, setProgress] = useState(false)
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
        console.log(1)
    }, [item])

    const form = useRef();

    const sendBook = (e) => {
      e.preventDefault();
      setProgress(true)

      emailjs
        .send('service_ijcrtjv', 'template_g14c74m', inputValue, {
            publicKey: 'YD0RbkfkM-DyGjWAS',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setProgress(false)
                setSuccess(true)
                setActiveBookForm(false)
                setTimeout(() => {
                    setSuccess(false)
                }, 2200);
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
                            setPrice={setPrice}
                            setActiveBookForm={setActiveBookForm} />
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
                    setPrice={setPrice}
                    progress={progress}/>
            </div>
            {success && (
                <Alert severity="success" className={styles.success}>
                    <AlertTitle>
                        success
                    </AlertTitle>
                </Alert>
            )}
        </Container>
    )
}

export default CarDetail