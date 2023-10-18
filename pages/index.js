import Head from 'next/head';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home({recipeData}) {

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
            <div className={styles.padding}>
              Options
            </div>
            <div className={styles.padding}>
              Options
            </div>
            <div className={styles.padding}>
              Options
            </div>
            <div className={styles.padding}>
              Options
            </div>
          </div>
        </div>
      <div>
        fetching data:
        <pre>{JSON.stringify(recipeData, null, 2)}</pre>
      </div>
      </main>

      <footer>
        <h1>Footer contianer</h1>
      </footer>


    </div>
  );
}

export async function getServerSideProps() {
  const apiKey = 'f88ad23cb0f049e684c0a5bf244fa473';

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${apiKey}`);
    return {
      props: {
        recipeData: response.data
      }
    }
  } catch (error) {
    console.error("Error fetching data from Spoonacular API:", error);
    return {
      props: {
        recipeData: {}
      }
    }
  }
}