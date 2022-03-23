import type { NextComponentType } from 'next';
import { Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const NavBar: NextComponentType = () => {
  const router = useRouter();

  return (
    <Navbar expanded={false} expand="md" className={styles.nav} collapseOnSelect>
      <div className={styles.navContainer}>
        {/* Title */}
        <div className={styles.title}>
          <Link passHref href="/">
            <h3>حاسبة الزكاه</h3>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
