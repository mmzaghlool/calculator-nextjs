import type { NextComponentType } from 'next';
import styles from './Footer.module.scss';

const Footer: NextComponentType = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>جميع الحقوق محفوطة &copy;</p>
        <a className={styles.name} href={'https://mostafa-mahmoud.com/'} target="_blank" rel="noreferrer">
          <h5>mostafa-mahmoud.com</h5>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
