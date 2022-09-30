import type { AppProps } from 'next/app';
import CategoryContextProvider from '../src/app/context/category/provider';
import Layout from '../src/app/components/layout';
import DocumentHead from '../src/app/components/document-head';

function App(props: AppProps) {
  return (
    <>
      <DocumentHead />
      <CategoryContextProvider>
        <Layout {...props} />
      </CategoryContextProvider>
    </>
  );
}

export default App;
