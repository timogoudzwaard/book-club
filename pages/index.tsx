import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Go to <a href="/about">About</a>
        </h1>

        <div>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src="/svg/icon-message.svg"
                alt="ChitChat Logo"
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-gray-500">You have a new message!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
