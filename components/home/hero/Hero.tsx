import type { NextPage } from 'next';

import styles from './Hero.module.scss';

const Hero: NextPage = () => {
  return (
    <div className={styles['title-container']}>
      <h1>لحساب زكاتك .. أدخل قيمة كافة الأصول التي تمتلكها خلال عام كامل</h1>
      <p>
        احسب نصاب زكاتك و قيمتها، عبر حاسبة الزكاة، أياً كانت أجناس الأموال التي تجب فيها الزكاة سواء كانت مالاً أو أسهماً أو ذهباً.
      </p>
    </div>
  );
};

export default Hero;
