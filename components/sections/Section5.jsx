import { Col, Container, Row } from "react-bootstrap";
import styles from './Section5.module.scss'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../utils/arrows";
import NTFScroll from "../utils/NTFScroll";

import { Card } from "../utils/Card";

import React, { useEffect, useState } from 'react';




function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
}

const elemPrefix = "NTF";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>["blue","red","green","violet"].map((val, ind) => ({ id: getId(ind),VideoName:val }));


export default function Section5() {
    const [items] = React.useState(getItems);
    
    return (<section className={styles.Section} id="NTF">
                <img src="./image/Section5BackGround.png" className={styles.Section5BackGround} />
                <Container>
                    <Row>
                        <h3 className={styles.Section_title}>NTF ITEMS</h3>
                    </Row>
                    <Row>
                            <NTFScroll items={items}></NTFScroll>
                    </Row>
                </Container>
            </section>)
}
