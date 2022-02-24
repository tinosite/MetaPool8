
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import styles from './Section3.module.scss'

export default function Section3() {
  return (
        <>
            <section className={styles.Section}>
                <Container>
                    <Row className={styles.Section3ContentContainer}>
                        <Col className="col-md-3 ms-row" >
                            <Row className={"col"}>
                                <div className={[styles.PlayToEarn,"col-md-4 mx-0"].join(" ")}></div>
                                <div className="col-md-8 section3-lable p-0 section3-lable-left" ><lable glass="true">Play to earn</lable></div>
                            </Row>
                            <Row className={"col"}>
                                <div className={[styles.GiftBox,"col-md-4 mx-0"].join(" ")}></div>
                                <div className="col-md-8 section3-lable p-0 section3-lable-left" ><lable glass="true">Gift Box</lable></div>
                            </Row>
                            <Row className={"col"}>
                                <div className={[styles.Upgrade,"col-md-4 mx-0"].join(" ")}></div>
                                <div className="col-md-8 section3-lable p-0 section3-lable-left" ><lable glass="true">UPgrade</lable></div>
                            </Row>
                        </Col>

                        <Col className={[styles.Section3MidImage,"col-mid-6 ms-row"].join(" ")}></Col>
                        
                        <Col className="col-md-3 ms-row" >
                            <Row className={"col"} >
                                <div className="col-md-8 section3-lable section3-lable-right p-0" ><lable glass="true">Trade</lable></div>
                                <div className={[styles.Trade,"col-md-4 mx-0"].join(" ")}></div>
                            </Row>
                            <Row className={"col"}>
                                <div className="col-md-8 section3-lable section3-lable-right p-0" ><lable glass="true">Stake</lable></div>
                                <div className={[styles.Stake,"col-md-4 mx-0"].join(" ")}></div>
                            </Row>
                            <Row className={"col"}>
                                <div className="col-md-8 section3-lable section3-lable-right p-0" ><lable glass="true">NTF Items</lable></div>
                                <div className={[styles.NTF_Items,"col-md-4 mx-0"].join(" ")}></div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}
