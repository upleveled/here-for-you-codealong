import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <div>
        <span>here's a chipmunk 🐿</span>
        <img src="chipmunk.jpg" alt="Chipmunk with peanut" width="300" />
      </div>

      <div>
        <span>and a chipmunk with corn 🌽</span>
        <img src="chipmunk-with-corn.jpg" />
      </div>
    </div>
  );
}
