import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'

export default function Projects(){
    return (
      <div className={styles.container}>
        <Head>
          <title>William T. Brown - Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <Navigation />
          <Viewport>
              
          </Viewport>
        </main>
      </div>
    )
}