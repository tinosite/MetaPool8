
import Image from 'next/image';
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import styles from '../../styles/Home.module.scss'

export default function Section1() {
  return (
        <>    
            <section className={styles.Section1}>
                <video playsInline={true} autoPlay={true} muted loop id="myVideo" className={styles.Section1BackGround}>
                    <source src="/first_page_background.mp4" type="video/mp4"/>
                </video>  
                <Container className={styles.Section1Container}>
                    <Row >
                        <Col class="col-2 m-auto" style={{padding:"0 !important",margin:"auto 0 !important",width:"auto !important"}}>
                            <img src="/image/logo.png" style={{position:"relative",height:"10vw",width:"10vw"}}/>
                        </Col>
                        <Col class="col-10">
                            <span class="Section1_title">
                                Meta Pool8
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <div id="section1_description" style={{  width: "47vw",paddingTop:"2rem",borderRadius:"20px",height:"45vh",padding:"1.2rem"}} glass="true">
                            <p style={{fontSize:"1.8vw",fontFamily:"Share Tech",color:"white"}}>
                            Meta pool is an electronic game based on blockchain technology. You can join game tournaments and compete with other players and earn money.
                            </p>
                            <p style={{fontSize:"1.7vw",marginTop:"2rem",fontFamily:"Share Tech",color:"#FFCC33"}}>
                            #metaverse #NFT #Play_To_Earn #gamefi
                            </p>
                            <p style={{fontSize:".85",fontFamily:"Share Tech",color:"white"}}>
                            $THG Contract Address
                            </p>
                            <Row>
                                <p style={{marginLeft:".75rem",fontFamily:"roboto",fontSize:"1.2vw",border:"1px solid white",color:"#BDBABA",width:"auto"}}>
                                    BEP20</p>
                                <p style={{fontFamily:"roboto",fontSize:"1.2vw",border:"1px solid white",color:"#BDBABA",width:"auto"}}>
                                    0x9fd87aefe02441b123c3c32466cd9db4c578618f</p>
                            </Row>
                        </div>
                    </Row>
                    <Row id="section1_description_btns" style={{  width: "47vw",justifyContent:"space-between"}} class="row pt-5">
                        <input value="Trade Now" type="button" className="section1-description-btn"/>
                        <input value="whitepaper" type="button" className="section1-description-btn" style={{borderBottomRightRadius : "3rem",borderTopLeftRadius:"unset !important"}}/>
                    </Row>
                </Container>
            </section>
        </>
  )
}
