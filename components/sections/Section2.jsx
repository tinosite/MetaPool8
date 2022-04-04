import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import styles from './Section2.module.scss'

export default function Section2() {
    return (
        <>
            <section className={styles.Section} id="GamePlay">
                <img src="/image/backslide2.jpg" className={styles.Section2BackGround} />
                <Container>
                    <Row className={styles.Section2title}>
                        <h2>Game Play</h2>
                    </Row>
                    <Row className={styles.Section2Glass} glass="true">

                        {/*Start Slide one*/}

                        <Row id="slide1">
                            <Col className={styles.slide1image} lg={8} sm={12}>
                                <img src="/image/anime.png"></img>
                            </Col>
                            <Col className={styles.slide1text} lg={4} sm={12}>
                                <h3>introduction</h3>
                                <hr />
                                <p>You can choose the planet you want and compete on it. To participate in the race, you have to pay a token according to the desired planet. We have different plans for you so that you can choose the desired planet according to the amount of tokens.
                                    If you win the match, you will receive tokens from the losing side.  For example, if you participate in the earth match and pay 2x tokens and win, in addition to your own tokens, you will also receive 2x tokens from your opponent.</p>
                            </Col>
                        </Row>

                        {/*End Slide 1*/}
                        {/*Start Slide 2*/}
                        {/* <Row id="slide2">
                            <Col className={styles.slide2image} lg={8} sm={12}>
                                <Row className={styles.firstPlanets}>
                                    <a href="#" className={styles.venus} id="venus">
                                    <img src='/image/Venus.png' alt=""></img>

                                </a>
                                <a href="#" className={styles.earth} id="earth">
                                    <img src='/image/Earth.png' alt=""></img>

                                </a>
                                <a href="#" className={styles.neptune} id="neptune">

                                    <img src='/image/Neptune.png' alt=""></img>

                                </a>
                                </Row>
                                <Row className={styles.secondPlanets}>
                                     <a href="#" className={styles.mercury} id="mercury">

                                    <img src='/image/Mercury.png' alt=""></img>

                                </a>
                                <a href="#" className={styles.saturn} id="saturn">
                                    <img src='/image/Saturn.png' alt=""></img>
                                </a>
                                <a href="#" className={styles.mars} id="mars">
                                    <img src='/image/Mars.png' alt=""></img>
                                </a>
                                </Row>
                               
                            </Col>
                            <Col className={styles.slide1text} lg={4} sm={12}>
                                <h3>1 on 1</h3>
                                <hr />
                                <p>Welcome to the competitions This section is very exciting because you can earn more money. As in the previous sections, in this section we have considered different designs for you that you can participate in and compete. There will be 4-person and 8-person competitions and the winner of the competition will have all the tokens of his competitors. For example, if you participate in an 8-player tournament, you will receive 8x  tokens by paying x tokens and winning 4 games.</p>
                            </Col>
                        </Row> */}

                        {/*End Slide 2*/}
                        {/*Start Slide 3*/}

                        {/* <Row id="slide3">
                            <Col className={styles.slide3image} lg={8} sm={12}>
                                <img src="/image/Winner.png"></img>
                            </Col>
                            <Col className={styles.slide1text} lg={4} sm={12}>
                                <h3>Tournament</h3>
                                <hr />
                                <p>Welcome to the competitions This section is very exciting because you can earn more money. As in the previous sections, in this section we have considered different designs for you that you can participate in and compete. There will be 4-person and 8-person competitions and the winner of the competition will have all the tokens of his competitors. For example, if you participate in an 8-player tournament, you will receive 8x  tokens by paying x tokens and winning 4 games.</p>
                            </Col>
                        </Row> */}
                        {/*End Slide 3*/}
                        {/*Start Slide 3*/}

                        {/* <Row id="slide4">
                            <Col className={styles.slide4image} lg={8} sm={12}>
                                <img src="/image/Freeplay.png"></img>
                            </Col>
                            <Col className={styles.slide1text} lg={4} sm={12}>
                                <h3>Free Play</h3>
                                <hr />
                                <p>Stay alive with your friend or be the last man standing. Show your skillsStay alive with your friend or be the last man standing. Show your skillsStay alive with your friend or be the last man standing. Show your skillsStay  alive with your friend   alive with your friend  </p>
                            </Col>
                        </Row> */}
                        {/*End Slide 4*/}



                    </Row>
                    <Row className={styles.pageNavigation}>
                        <Col sm={2} className={styles.section2PreBut}>
                            <button type="button" >

                            </button>
                        </Col>
                        <Col sm={8} className={styles.slideLine}>
                            <button type="button" id="slide1Line"></button>
                            <button type="button" id="slide2Line"></button>
                            <button type="button" id="slide3Line"></button>
                            <button type="button" id="slide4Line"></button>
                        </Col>
                        <Col sm={2} className={styles.section2NextBut}><button type="button" ></button></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

