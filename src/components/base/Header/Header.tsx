import Link from 'next/link';
import ColorSchemaButton from '@/features/theme/components/ColorSchemaButton';
import {
  Autocomplete,
  Burger,
  Group,
  Header,
  createStyles,
  rem,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { Search } from 'tabler-icons-react';

type HeaderSearch = {
  link: string;
  label: string;
};

type Props = {
  links: HeaderSearch[];
  drawerToggle: () => void;
  opened: boolean;
};

// CSS
const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    display: 'flex',
  },

  links: {
    [theme.fn.smallerThan(theme.breakpoints.md)]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  search: {
    [theme.fn.smallerThan(theme.breakpoints.lg)]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan(theme.breakpoints.lg)]: {
      display: 'none',
    },
  },
}));

const HeaderSearch = ({ links, drawerToggle, opened }: Props) => {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <Header className={classes.header} height={56}>
      <div className={classes.inner}>
        <Link href="/" className={classes.logo}>
          <MantineLogo size={28} />
        </Link>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size="1rem" />}
            data={[
              'React',
              'Angular',
              'Vue',
              'Next.js',
              'Riot.js',
              'Svelte',
              'Blitz.js',
            ]}
          />
          <Burger
            opened={opened}
            onClick={drawerToggle}
            size="sm"
            className={classes.burger}
          />
          <ColorSchemaButton />
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
