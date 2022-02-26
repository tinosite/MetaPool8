import { Col, Container, Row } from "react-bootstrap";
import styles from './Section5.module.scss'

export default function Section4() {
    return (<section className={styles.Section}>
                <img src="./image/Section5BackGround.png" className={styles.Section5BackGround} />
                <Container>
                    <h3 className={styles.Section_title}>Tokenomics</h3>
                </Container>
            </section>)
}