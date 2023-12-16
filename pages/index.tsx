import type { NextPage } from 'next'
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Section1 from '../components/sections/Section1'
import Section2 from '../components/sections/Section2'
import Section3 from '../components/sections/Section3'
import Section4 from '../components/sections/Section4'
import Section5 from '../components/sections/Section5'

import Section6 from '../components/sections/Section6'
import AppContext from '../AppContext'
import Navbar from '../components/navbar/navbar'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const SECTIONS = ['#Home', '#GamePlay', '#Section3', '#Tokenomics', '#NTF', '#roadmap'];
  var start = SECTIONS.indexOf(router.asPath.substr(1));
  const [header, setheader] = React.useState(0);

  var lastChange = new Date().getTime();

  const listenScrollEvent = (e: any) => {
    var s = new Date().getTime();
    if (!s)
      s = new Date().getTime();


    if (s - lastChange < 1500)
      return;

    lastChange = s;

    var delta = e.wheelDelta;

    if (delta > 0) {
      if (header - 1 < 0) return;
      // router.push(SECTIONS[header - 1])
      document.getElementById(SECTIONS[header - 1].substring(1))?.scrollIntoView();
      setheader(header-1);

    }
    else {
      if (header + 1 >= SECTIONS.length) return;
      // router.push(SECTIONS[header + 1])
      document.getElementById(SECTIONS[header + 1].substring(1))?.scrollIntoView();

      setheader(header+1);
    }
    window.removeEventListener('mousewheel', listenScrollEvent);
  }


  React.useEffect(() => {
    window.addEventListener('mousewheel', listenScrollEvent);
  })

  return (
    <AppContext.Provider value={{ header: header, setheader: setheader }}>
      <Navbar />

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>

    </AppContext.Provider>
  )
}

export default Home
