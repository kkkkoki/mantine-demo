import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout/Layout';

const About: NextPageWithLayout = () => {
  return <div>About Component</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
