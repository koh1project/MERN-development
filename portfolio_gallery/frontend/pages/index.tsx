import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { MainFooter } from '@/components/footers/MainFooter/MainFooter';
import { MainHeader } from '@/components/headers/MainHeader/MainHeader';

const Home: NextPage = () => {
  // throw new Error('Server error');

  return (
    <div className={''}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader text="Lets post your portfolio" />
      <main></main>

      <MainFooter text="Copyright 2022" />
    </div>
  );
};

export default Home;
