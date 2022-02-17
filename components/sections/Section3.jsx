
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import styles from './Section3.module.scss'

export default function Section3() {
  return (
        <>
            <main className={styles.Section}>
                <Container className={styles.Section3ContentContainer}>
                    <Row>
                        <Col className="col-3" >
                            <Row>
                                <div className={[styles.PlayToEarn,"col-4 mx-0"].join(" ")}></div>
                                <div className="col section3-lable p-0 section3-lable-left" ><lable glass="true">Play to earn</lable></div>
                            </Row>
                            <Row>
                                <div className={[styles.GiftBox,"col-4 mx-0"].join(" ")}></div>
                                <div className="col section3-lable p-0 section3-lable-left" ><lable glass="true">Gift Box</lable></div>
                            </Row>
                            <Row>
                                <div className={[styles.Upgrade,"col-4 mx-0"].join(" ")}></div>
                                <div className="col section3-lable p-0 section3-lable-left" ><lable glass="true">UPgrade</lable></div>
                            </Row>
                        </Col>

                        <Col className={styles.Section3MidImage}></Col>
                        
                        <Col className="col-3" >
                            <Row>
                                <div className="col section3-lable section3-lable-right p-0" ><lable glass="true">Trade</lable></div>
                                <div className={[styles.Trade,"col-4 mx-0"].join(" ")}></div>
                            </Row>
                            <Row>
                                <div className="col section3-lable section3-lable-right p-0" ><lable glass="true">Stake</lable></div>
                                <div className={[styles.Stake,"col-4 mx-0"].join(" ")}></div>
                            </Row>
                            <Row>
                                <div className="col section3-lable section3-lable-right p-0" ><lable glass="true">NTF Items</lable></div>
                                <div className={[styles.NTF_Items,"col-4 mx-0"].join(" ")}></div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
  )
}
