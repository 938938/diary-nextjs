import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href='/'>Home</Link>
      <Link href='/diary'>Diary</Link>
    </div>
  );
};

export default Nav;
