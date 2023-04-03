import { ReactElement } from 'react';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NextPageWithLayout } from './_app';
import DrawerComponent from '@/components/base/Drawer/Drawer';
import Layout from '@/components/base/Layout/Layout';

const Home: NextPageWithLayout = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <div>Home Component</div>
      <Drawer
        opened={opened}
        onClose={toggle}
        title="search"
        transitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      >
        <DrawerComponent />
      </Drawer>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
