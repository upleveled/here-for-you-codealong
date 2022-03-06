import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Chipmunks and Squirrels</title>
      </Head>

      <h1 style={{ fontSize: '80px' }}>chipmunks and squirrels</h1>

      <div>
        <h2 style={{ fontSize: '50px' }}>here's a chipmunk 🐿</h2>

        <img src="chipmunk.jpg" alt="Chipmunk with peanut" width="300" />
      </div>

      <div>
        <h2 style={{ fontSize: '30px' }}>and a chipmunk with corn 🌽</h2>

        <img
          src="chipmunk-with-corn-small.jpg"
          alt="a chipmunk with a cob of corn"
        />
      </div>

      <div>
        <h2 style={{ fontSize: '50px' }}>here's a squirrel 🥋</h2>

        <img src="squirrel-kung-fu-small.jpg" alt="a squirrel doing kung fu" />
      </div>

      <div>
        <h2 style={{ fontSize: '30px' }}>a squirrel movie! 🎥</h2>

        <video autoPlay muted loop>
          <source src="squirrel-tail.mp4" />
          <track src="squirrel-tail.vtt" kind="captions" />
        </video>
      </div>

      <div style={{ margin: '100px 0' }}>
        <button className={styles.buttonLike} onClick={() => setShowMore(true)}>
          show more
        </button>
      </div>

      {showMore && (
        <div>
          <h2 style={{ fontSize: '50px' }}>
            and another squirrel with a hat 🧢
          </h2>

          <img
            src="squirrel-hat.jpg"
            alt="a squirrel with a hat and a bicycle"
          />
        </div>
      )}
    </div>
  );
}
