import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <video playsInline={true} autoPlay={true} muted loop id="myVideo">
          <source src="/first_page_background.mp4" type="video/mp4"/>
      </video>
      
      <main className={styles.main}>
        
      </main>
    </>
  )
}

export default Home
