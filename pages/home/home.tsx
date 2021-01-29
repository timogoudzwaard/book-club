import Head from 'next/head';
import Card from '../../components/atoms/card/card';
import Header from '../../components/organism/header/header';

const Home = () => {
  return (
    <div>
      <Header />

      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-2">
        <h1 className="text-3xl text-center">Home Page</h1>

        <div className="md:flex inline md:space-x-10 space-y-6 md:space-y-0">
          <Card padding href="#">
            <div className="flex-shrink">
              <img className="w-full" src="/images/background.png" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-y-6 ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  blog
                </div>
                <p className="cursor-pointer block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  Angular 11 update: Dit zijn de highlights
                </p>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </Card>
          <Card padding>
            <div className="flex-shrink">
              <img className="w-full" src="/images/background.png" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="space-y-6 ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  nieuwtje
                </div>
                <p className=" block mt-1 text-lg leading-tight font-medium text-black">
                  Angular 11 update: Dit zijn de highlights
                </p>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
