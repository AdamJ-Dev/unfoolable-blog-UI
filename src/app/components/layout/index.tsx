import type { AppProps } from 'next/app';
import BlogHeader from '../blog-header';
import styles from './index.module.css';

const Layout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={styles.layoutContainer}>
      <BlogHeader />
      <Component {...pageProps} />
    </div>
  );
};

export default Layout;
