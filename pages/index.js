import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='sticky-top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  );
}
