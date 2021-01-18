import Head from 'next/head';
import Header from '../components/header/header';

const About = () => {
  return (
    <div>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto p-2">
        <h1 className="text-3xl">About page</h1>
        <p>This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
