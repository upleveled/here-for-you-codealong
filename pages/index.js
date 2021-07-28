import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <img src="chipmunk.jpg" alt="" width="300" />
    </div>
  );
}
