import Head from 'next/head'
import styles from '../styles/comingSoon.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Paprika | Coming Soon</title>
        <link rel="icon" href="/png.png" />
      </Head>
  
      <section className={styles.comingSoon}>
      <img src="/png.png" className={styles.img}/>
      <div className={styles.hero}>
       
        <h1 className={styles.text}>Coming Soon</h1>
        <p className={styles.p}>We are launching soon, please stay tuned.</p>
        <hr className={styles.hr} />
        {/* <p className={styles.l}></p> */}
      </div>
      </section>
      

     
     


    </div>
  )
}
