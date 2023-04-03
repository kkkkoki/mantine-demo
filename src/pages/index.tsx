import { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { createStyles } from '@mantine/core';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/base/Layout/Layout';

const useStyle = createStyles((theme) => ({
  container: {
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  },

  button: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.orange[6]
        : theme.colors.orange[5],
    border: 0,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    cursor: 'pointer',
    margin: theme.spacing.md,
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.orange[9]
          : theme.colors.orange[7],
    },
  },
}));

const Top: NextPageWithLayout = () => {
  const { classes } = useStyle();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.container}>
        <h1>TOP</h1>
        <Link href="/home">Home</Link>
      </main>
    </>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Top;
