import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout/Layout';

const Home: NextPageWithLayout = () => {
  return <div>Home Component</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
