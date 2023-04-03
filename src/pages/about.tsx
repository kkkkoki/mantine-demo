import { ReactElement } from 'react';
import Layout from '@/components/base/Layout/Layout';

const About = () => {
  return <div>About Component</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
