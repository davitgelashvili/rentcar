import style from './../../App.module.css'

const Container = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container