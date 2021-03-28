import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'
import Thumbnail from '../components/thumbnail'

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
            <h1>Projects</h1>

            <Thumbnail ThumbnailTitle="A New Title" ThumbnailDescription="A new description." src="/previews/preview.jpg" />
            <Thumbnail ThumbnailTitle="A Different Title" ThumbnailDescription="A different description." src="/previews/preview.jpg" />
            <Thumbnail ThumbnailTitle="A Better Title" ThumbnailDescription="A better description." src="/previews/preview.jpg" />      
          </Viewport>
        </main>
      </div>
    )
}