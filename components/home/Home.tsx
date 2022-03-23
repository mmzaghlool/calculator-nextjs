import type { NextPage } from 'next';

import Head from '../Head';
import Footer from '../footer/Footer';

import styles from './Home.module.scss';
import Hero from './hero/Hero';
import NisabCalculator from './nisab-calculator/NisabCalculator';
import ZakahCalculator from './zakah-calculator/ZakahCalculator';
import { useEffect } from 'react';
import FirebaseApp from '../../config/FirebaseApp';

const Home: NextPage = () => {
  useEffect(() => {
    FirebaseApp.analytics().screenView('Home');
  }, []);

  return (
    <div className="main">
      <Head />

      <div className={styles.container}>
        <Hero />
        <NisabCalculator />
        <ZakahCalculator />
        <ReadMore />
      </div>

      <Footer />
    </div>
  );
};

export default Home;

const ReadMore = () => {
  return (
    <>
      <h3>أقرأ المزيد</h3>
      <ul>
        <li>
          <a href="https://binbaz.org.sa/categories/fiqhi/75" target="_blank" rel="noreferrer">
            إخراج الزكاه و أهلها: الموقع الرسمي للشيخ الإمام ابن الباز
          </a>
        </li>

        <li>
          <a href="https://www.masrawy.com/gold" target="_blank" rel="noreferrer">
            سعر الذهب اليوم من مصراوي
          </a>
        </li>
      </ul>
    </>
  );
};
