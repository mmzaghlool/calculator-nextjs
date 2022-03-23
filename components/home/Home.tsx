import type { NextPage } from 'next';

import Head from '../Head';
import Footer from '../footer/Footer';

import styles from './Home.module.scss';
import Hero from './hero/Hero';
import NisabCalculator from './nisab-calculator/NisabCalculator';
import ZakahCalculator from './zakah-calculator/ZakahCalculator';

const Home: NextPage = () => {
  return (
    <div className="main">
      {/* Head */}
      <Head
        title={'Software Engineer'}
        meta={`A passionate Software engineer,
        Having experience building Web and Mobile applications with JS/TS, React, React Native, NextJS, and NodeJS`}
      />
      {/* <NavBar /> */}

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
