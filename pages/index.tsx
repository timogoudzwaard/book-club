import Head from 'next/head';
import Header from '../components/header/header';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto p-2">
        <div className="p-6 ring-1 ring-black ring-opacity-5 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="/svg/icon-message.svg"
              alt="chat icon"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">Book club</div>
            <p className="text-gray-500">Because we love to read.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
