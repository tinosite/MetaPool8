import Image from 'next/image';
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import styles from '../../styles/Home.module.scss'
import AppContext from '../../AppContext'
export default function Section1() {
  const {header,setheader} = React.useContext(AppContext)
  return (
        <>    
            <section className={styles.Section1} id="Home">
                <video playsInline={true} autoPlay={true} muted loop id="myVideo" className={styles.Section1BackGround}>
                    <source src="/first_page_background-c.mp4" type="video/mp4"/>
                </video>  
                <Container className={styles.Section1Container}>

                    <Row className={styles.Section1Header}>
                        <Col className="col-2 m-auto" style={{padding:"0 !important",margin:"auto 0 !important",width:"auto !important"}}>
                            <img src="/image/logo.png" style={{position:"relative",height:"10vw",width:"10vw"}}/>
                        </Col>
                        <Col className="col-10">
                            <span className="Section1_title">
                                Meta Pool8
                            </span>
                        </Col>
                    </Row>
                    
                    <Row>
                        <div className={styles.section1_description} glass="true">
                            <p className={styles.section1_description_p1}>
                            Meta pool is an electronic game based on blockchain technology. You can join game tournaments and compete with other players and earn money.
                            </p>
                            <p className={styles.section1_description_p2}>
                            #metaverse #NFT #Play_To_Earn #gamefi
                            </p>
                            <p className={styles.section1_description_THG}>
                            $THG Contract Address
                            </p>
                             <Row>
                                <p className={styles.BEP20}>
                                    BEP20</p>
                                <p className={styles.BEP20Address}>
                                    0x9fd87aefe02441b123c3c32466cd9db4c578618f</p>
                            </Row>
                        </div>
                    </Row>
                    <Row id="section1_description_btns" style={{  width: "47vw",justifyContent:"space-between"}} className="row pt-5">
                        <input value="Trade Now" type="button" className="section1-description-btn"/>
                        <input value="whitepaper" type="button" className="section1-description-btn" style={{borderBottomRightRadius : "3rem",borderTopLeftRadius:"unset !important"}}/>
                    </Row>
                </Container>
                
            </section>
        </>
  )
}
