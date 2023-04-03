import React, { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '@/components/base/Layout/Layout';

const Community = () => {
  return <div>Community Component</div>;
};

Community.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Community;
