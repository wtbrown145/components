import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Viewport from '../components/viewport'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>William T. Brown - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        <Viewport>
          <p>
            As a well-established IT leader with a passion for programming, design, and development, I am an ideal candidate for your opening. Having progressed through a series of roles over more than three years, I am excited to apply my skills to produce immediate results as a valuable member of the team.
          </p>

          <p>
            Throughout my career, I have made it my priority to utilize current technologies and new techniques to develop elegant, creative technical solutions across all project phases. Comfortable in collaborative and independently-driven roles, I am a forward-thinking leader with refined analytical and critical thinking skills, and I can adapt and revise my strategies to meet evolving priorities, shifting needs, and emergent issues. 
          </p>

          <p>
            Furthermore, I would bring the following strengths to your team: 
              <li>
                Stack Maintenance &amp; Development 
              </li>
              <li>
                Data Research &amp; Analysis  
              </li>
              <li>
                Tools &amp; Script Development  
              </li>
          </p>

          <p>
            I look forward to discussing my background and your needs in detail, as I am confident that my unique experience will be of great use in meeting your immediate and future objectives. Please contact me at your earliest convenience to schedule an interview; until then, thank you for your consideration.
          </p>
        </Viewport>
      </main>
    </div>
  )
}
