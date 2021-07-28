import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showMore, setShowMore] = useState(false);
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

        <img src="chipmunk-with-corn-large.jpg" />
      </div>

      <div>
        <div style={{ fontSize: '50px' }}>here's a squirrel 🥋</div>

        <img src="squirrel-kung-fu-large.jpg" />
      </div>

      <div>
        <div style={{ fontSize: '30px' }}>a squirrel movie! 🎥</div>

        <img src="squirrel-tail.gif" />
      </div>

      <div style={{ margin: '100px 0' }}>
        <div className={styles.buttonLike} onClick={() => setShowMore(true)}>
          show more
        </div>
      </div>

      {showMore && (
        <div>
          <div style={{ fontSize: '50px' }}>
            and another squirrel with a hat 🧢
          </div>

          <img src="squirrel-hat.jpg" />
        </div>
      )}
    </div>
  );
}
