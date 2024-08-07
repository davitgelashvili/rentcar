import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styles from './Ui.module.scss'
import dayjs from 'dayjs';

const UiDate = ({title, inputValue, setInputValue, valueName}) => {
    function getMonth(date){
        let month = date + 1
        return month < 10 ? '0' + month : month
    }
    function getDate(date){
        let _date = date
        return _date < 10 ? '0' + _date : _date
    }
    function getYear(date){
        let year = date
        return year
    }
    
    return (
        <label>
            <LocalizationProvider dateAdapter={AdapterDayjs} className="dsds">
                <p className={styles.title}>{title}</p>
                <DatePicker 
                    className={styles.datepick}
                    // defaultValue={dayjs()}
                    minDate={dayjs(new Date())}
                    onChange={(newValue) => {
                        setInputValue({...inputValue, [valueName]: `${getDate(newValue.$D)} / ${getMonth(newValue.$M)} / ${getYear(newValue.$y)}`})
                    }}
                    />
            </LocalizationProvider>
        </label>
    )
}

export default UiDate