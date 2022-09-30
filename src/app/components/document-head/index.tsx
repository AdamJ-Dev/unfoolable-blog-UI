import Head from 'next/head';
import { getWindowTitle } from '../../../../config/about/selectors';

const DocumentHead: React.FC = () => {
  return (
    <Head>
      <title>{getWindowTitle()}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default DocumentHead;
