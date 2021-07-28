import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <div style={{ fontSize: '80px' }}>chipmunks and squirrels</div>

      <div>
        <div style={{ fontSize: '50px' }}>here's a chipmunk 🐿</div>

        <img src="chipmunk.jpg" alt="Chipmunk with peanut" width="300" />
      </div>

      <div>
        <div style={{ fontSize: '30px' }}>and a chipmunk with corn 🌽</div>

        <img src="chipmunk-with-corn.jpg" />
      </div>

      <div>
        <div style={{ fontSize: '50px' }}>here's a squirrel 🥋</div>

        <img src="squirrel-kung-fu.jpg" />
      </div>

      <div>
        <div style={{ fontSize: '50px' }}>and another squirrel with a hat</div>

        <img src="squirrel-hat.jpg" />
      </div>
    </div>
  );
}
