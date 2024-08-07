// import UiSlide from '../Ui/UiSlide'
import UiInput from '../Ui/UiInput'
import styles from './Detail.module.scss'
import FormSectionTitle from './FormSectionTitle'
import UiSelect from '../Ui/UiSelect'
import UiDate from '../Ui/UiDate'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

const BookForm = ({item, inputValue, setInputValue, form, price, setPrice, setActiveBookForm}) => {
    const rentLocation = [
        {
            id: 54363463,
            name: 'airoport',
            title: 'Airoport'
        },
        {
            id: 64373573,
            name: 'citydelivery',
            title: 'City Delivery'
        },
        {
            id: 3462953,
            name: 'rentaloffice',
            title: 'Rental Office'
        },
    ]
    const inputList = [
        {
            id: 124311,
            title: 'სახელი და გვარი',
            name: 'fullname',
            placeholder: '',
            type: 'text',
            value: inputValue.fullname
        },
        {
            id: 3468632,
            title: 'მoბილური',
            name: 'mobile',
            placeholder: '',
            type: 'text',
            value: inputValue.mobile
        }
    ]

    return (
        <div className={styles.left}>   
            <button onClick={() => setActiveBookForm(false)} className={styles.back_btn}><ArrowBackIos /><span>go back</span></button>
            <form className={styles.form} ref={form}>
                <section className={styles.section}>
                    <FormSectionTitle title={'Pick-up'}/>
                    <UiDate 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        valueName={'startDate'}
                        title={'აირჩიე დღე'}/>
                    <UiSelect 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        item={rentLocation}
                        valueName={'pickupLocal'}
                        title={'აირჩიე ადგილი'}
                    />
                    {/* <UiSlide 
                        price={price}
                        setPrice={setPrice}
                        title={'აირჩიე დრო'}/> */}
                </section>
                <section className={styles.section}>
                    <FormSectionTitle title={'Drop-off'}/>
                    {/* <UiSlide 
                        price={price}
                        setPrice={setPrice}
                        title={'აირჩიე დრო'}/> */}
                    <UiSelect 
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        item={rentLocation}
                        valueName={'dropoffLocal'}
                        title={'აირჩიე ადგილი'}
                    />
                </section>
                <section className={styles.section}>
                    <FormSectionTitle title={'Main driver’s details'}/>
                    {
                        inputList?.map((item)=>{
                            return (
                                <UiInput 
                                    key={item.id}
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                    item={item}
                                />
                            )
                        })
                    }
                </section>
            </form>
        </div>
    )
}

export default BookForm