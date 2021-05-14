import Head from 'next/head'
import styles from '../styles/comingSoon.module.css'
import { faPhone,faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Paprika | Coming Soon</title>
        <link rel="icon" href="/png.png" />
      </Head>
      <div className={styles.opening_soon_info}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <a className={styles.brand_logo} href="/"><img src="/png.png" className={styles.img}/></a>
                    </div>
                </div>

                <div className={styles.coming_back}>
                    <h1>We Are Launching Soon</h1>
                    <p className={styles.t_text}>
                      Get in touch with us
                    </p>
                    <div className={styles.info}>
                    <span><FontAwesomeIcon icon={faPhone} inverse /> +46 0733501904</span>
                    <span><FontAwesomeIcon icon={faInbox} />  support@paprika-sy.com</span>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
