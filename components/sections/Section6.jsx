import { Col, Container, Row } from "react-bootstrap";
import styles from './Section5.module.scss'

export default function Section4() {
    return (<section className={styles.Section}>
                <img src="./image/back6.jpg" className={styles.Section6BackGround} />
                <Container>
                    <h3 className={styles.Section_title}></h3>
                </Container>
            </section>)
}