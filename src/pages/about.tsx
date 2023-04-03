import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '@/components/base/Layout/Layout';

const About = () => {
  return <div>About Component</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
