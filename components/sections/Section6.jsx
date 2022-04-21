import { Col, Container, Row } from "react-bootstrap";
import styles from "./Section6.module.scss";

export default function Section6() {
  return (
    <section className={styles.Section} id="roadmap">
      <img src="./image/back6.jpg" className={styles.Section6BackGround} />
      <Container>
        <Row>
          <h3 className={styles.Section_title}></h3>
        </Row>
        <Row className={styles.roadmap_road}>
          <img src="./image/roadmap.png"></img>
        </Row>
        <Row className={styles.banner}>
          <Col>
            <img src="./image/Q2.png" className={styles.Q2}></img>
          </Col>
          <Col>
            <img src="./image/Q3.png" className={styles.Q3}></img>
          </Col>
          <Col>
            <img src="./image/Q4.png" className={styles.Q4}></img>
          </Col>
          <Col>
            <img src="./image/Q1.png" className={styles.Q1}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
