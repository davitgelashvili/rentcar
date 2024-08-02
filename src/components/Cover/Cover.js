import Container from "../../module/Container/Container"
import Logo from "./Logo/Logo"
import Review from "./Review/Review"
import Title from "./Title/Title"
import styles from './Cover.module.css'

const Cover = () => {
    return (
        <div className={styles.cover}>
            <Container>
                <div className={styles.content}>
                    <div>
                        <Logo />
                        <Title />
                    </div>
                    <div>
                        <Review />
                    </div>
                </div>
            </Container>
            
        </div>
    )
}

export default Cover