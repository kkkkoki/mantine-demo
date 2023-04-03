import { ReactNode } from 'react';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import HeaderSearch from '../Header/Header';
import DrawerComponent from '@/components/base/Drawer/Drawer';

const links = [
  { link: '/about', label: 'サイトについて' },
  { link: '/community', label: 'コミュニティ' },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <HeaderSearch links={links} drawerToggle={toggle} opened={opened} />
      <main>{children}</main>
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

export default Layout;
