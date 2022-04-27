import { Col, Container, Row } from "react-bootstrap";
import styles from './Section5.module.scss'
import NTFScroll from "../utils/NTFScroll_2";
import React, { useEffect, useState } from 'react';




const elemPrefix = "NTF";
const getId = (index) => `${elemPrefix}${index}`;
const getItems = () =>["blue","red","green","violet"].map((val, ind) => ({ id: getId(ind),VideoName:val }));

export default function Section5() {
    return (<section className={styles.Section} id="NTF">
                <img src="./image/Section5BackGround.png" className={styles.Section5BackGround} />
                <Container>
                    <Row>
                        <h3 className={styles.Section_title}>NTF ITEMS</h3>
                    </Row>
                    <Row>
                        <NTFScroll items={getItems()}></NTFScroll>
                    </Row>
                </Container>
            </section>)
}
