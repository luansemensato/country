// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

// Styles
import styles from './styles.module.css';

const Layout = ({ children }) => (
  <>
    <Header />

    <main className={styles.container}>{children}</main>

    <Footer />
  </>
);

export default Layout;
