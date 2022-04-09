import { Col, Container, Row } from "react-bootstrap";
import styles from './Section4.module.scss'
const LeftItems = (prop)=>{
    return(<div className="col-sm-6 center-on-sm">
        <div className={[styles.LeftItem_title,"row"].join(" ")}><lable>{prop.title}</lable></div>
        <div className={[styles.LeftItem_innerDetail,"row"].join(" ")} glass="true">
            {prop.innerDetail}
        </div>
    </div>)
}


export default function Section4() {
    return (<section className={styles.Section} id="Tokenomics">
            <img className={styles.Section4BackGround} src="./image/Section4Background.png"/>
            <Container>
                <h3 className={styles.Section_title}>Tokenomics</h3>
                    <Row>
                        <Col md={4} className={"sm-row"}>
                            <LeftItems title="Token name" innerDetail="metapool8"></LeftItems>
                            <LeftItems title="Token symbol" innerDetail="pool"></LeftItems>
                            <LeftItems title="Total suply" innerDetail="400,000,000"></LeftItems>
                            <LeftItems title="Blockchain network" innerDetail="polygon"></LeftItems>
                        </Col>
                        <Col md={8} className={"px-0"} style={{justifyContent: 'center', display: 'flex'}}>
                        <img className={styles.PieChart} src="./image/Section4PieChart.png"></img>
                        </Col>
                    </Row>
            </Container>
            </section>)
}