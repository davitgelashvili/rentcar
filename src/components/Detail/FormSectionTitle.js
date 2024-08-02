import styles from './Detail.module.scss'

const FormSectionTitle = ({title}) => {
    return (
        <h1 className={styles.section_title}>
            {title}
        </h1>
    )
}

export default FormSectionTitle