import Container from "../../module/Container/Container"
import Language from "./Language/Language"

const Header = () => {
    return (
        <header style={{
            backgroundColor: '#1e2a35',
            padding: 12,
        }}>
            <Container>
                <Language />
            </Container>
        </header>
    )
}

export default Header