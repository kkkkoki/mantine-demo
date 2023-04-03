import React, { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout/Layout';

const Community: NextPageWithLayout = () => {
  return <div>Community Component</div>;
};

Community.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Community;
