import React, { ReactElement } from 'react';
import Layout from '@/components/base/Layout/Layout';

const Community = () => {
  return <div>Community Component</div>;
};

Community.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Community;
