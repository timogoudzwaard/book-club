import Head from 'next/head';
import Header from '../../components/organism/header/header';

const About = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto p-2">
        <h1 className="text-3xl text-center">About page</h1>
        <p className="text-center">This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
