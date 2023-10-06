import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>MyNutritionist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.flexRow}>
          <div className={styles.flexRow}>
            <div>icon</div>
            <div>Nutritionist</div>
          </div>
          <div className={styles.flexRow}>
            <div>
              Options
            </div>
            <div>
              Options
            </div>
            <div>
              Options
            </div>
            <div>
              Options
            </div>
          </div>
        </div>

      </main>

      <footer>
        <h1>Footer contianer</h1>
      </footer>


    </div>
  );
}
