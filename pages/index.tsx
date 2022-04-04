import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Section1 from '../components/sections/Section1'
import Section2 from '../components/sections/Section2'
import Section3 from '../components/sections/Section3'
import Section4 from '../components/sections/Section4'
import Section5 from '../components/sections/Section5'
let LastChangeTime=0;
let sectionIndex=0;
import Section6 from '../components/sections/Section6'

const Home: NextPage = () => {
  var Sections = ["Home", "GamePlay", "Section3"]
  const [scrollY, setScrollY] = useState(0);
  LastChangeTime=(new Date()).getTime();
  const router = useRouter();

  const getOffsetTop = (element:any):number => {
    if (!element) return 0;
    return getOffsetTop(element.offsetParent) + element.offsetTop;
  };

  useEffect(() => {
    const handleScroll = (e:any) => {
      if ((new Date()).getTime() - LastChangeTime > 1000) {
        LastChangeTime=(new Date()).getTime()
        setScrollY(window.scrollY);
        sectionIndex=(++sectionIndex)%Sections.length

        // router.push(Sections[sectionIndex]);

        window.scrollTo(0,getOffsetTop(document.querySelector("#"+Sections[sectionIndex])))
      }
    }
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);
  return (
    <>
      {/* <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4> */}
      <Section5></Section5>
      <Section6></Section6>

    </>
  )
}

export default Home
