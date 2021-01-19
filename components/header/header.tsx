const Header = () => {
  return (
    <header className="p-4 mb-4 bg-white container border-b-2 mx-auto flex flex-wrap justify-between">
      <a className="w-full md:w-auto" href="/">
        <img
          className="mb-2 h-10 w-10 mx-auto md:m-0"
          src="/svg/icon-message.svg"
          alt="chat icon"
        />
      </a>

      <div className="self-center space-x-10">
        <a
          href="/about"
          className=" text-base font-medium text-gray-500 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="/about"
          className=" text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Pricing
        </a>
      </div>

      <div>
        <a
          href="/sign-in"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Sign in
        </a>
        <a
          href="#"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm transition text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
      </div>
    </header>
  );
};

export default Header;
