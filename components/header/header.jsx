const Header = () => {
  return (
    <header className="p-4 mb-4 bg-white container border-b-2 mx-auto flex justify-between">
      <a href="/">
        <img
          className="h-10 w-10"
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
          href="#"
          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Sign in
        </a>
        <a
          href="#"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
      </div>
    </header>
  );
};

export default Header;
