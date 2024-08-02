import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styles from './Ui.module.scss'
import dayjs from 'dayjs';

const UiDate = ({title, inputValue, setInputValue, valueName}) => {
    
    return (
        <label>
            <LocalizationProvider dateAdapter={AdapterDayjs} className="dsds">
                <p className={styles.title}>{title}</p>
                <DatePicker 
                    className={styles.datepick}
                    // defaultValue={dayjs()}
                    minDate={dayjs(new Date())}
                    onChange={(newValue) => setInputValue({...inputValue, [valueName]: `${newValue.$D} / ${newValue.$M} / ${newValue.$y}`})}
                    />
            </LocalizationProvider>
        </label>
    )
}

export default UiDate