import Image from 'next/image';
import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import styles from '../../styles/Home.module.scss'

export default function Section1() {
  return (
        <>
            <video playsInline={true} autoPlay={true} muted loop id="myVideo">
                <source src="/first_page_background.mp4" type="video/mp4"/>
            </video>      
            <main className={styles.Section1}>
                <Container>
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
                    <Row >
                        <div>
                            <div style={{  width: "47vw",paddingTop:"2rem",borderRadius:"20px",height:"45vh",padding:"1.2rem"}} glass="true">
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
                        </div>
                    </Row>
                    <Row class="row mx-0 pt-5">
                        <input value="Trade Now" type="button"class="p-1" 
                        style={{fontFamily:"Share Tech",fontSize:"40px",color:"#F2AE3F",backgroundColor:"#47769D",border:".2rem solid #FFCC33",width:"22vw",height:"10vh", borderTopLeftRadius : "3rem",marginRight:"3vw"}}/>
                        <input value="whitepaper" type="button"class="p-1" 
                        style={{fontFamily:"Share Tech",fontSize:"40px",color:"#F2AE3F",backgroundColor:"#47769D",border:".2rem solid #FFCC33",width:"22vw",height:"10vh", borderBottomRightRadius : "3rem"}}/>
                    </Row>
                </Container>
            </main>
        </>
  )
}
