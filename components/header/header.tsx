import Button from '../button/button';

const Header = () => {
  return (
    <header className="p-4 mb-4 bg-white container border-b-2 mx-auto flex flex-wrap justify-between">
      <a className="w-full md:w-auto" href="/">
        <img
          className="mb-2 h-10 w-10 mx-auto md:m-0 transition transform hover:scale-110"
          src="/svg/icon-message.svg"
          alt="chat icon"
        />
      </a>

      <div className="self-center space-x-10">
        <Button href="/about" variant="borderless">
          About
        </Button>
        <Button href="/about" variant="borderless">
          Pricing
        </Button>
      </div>

      <div>
        <Button
          href="/sign-in"
          className="whitespace-nowrap inline-flex items-center justify-center"
        >
          Sign in
        </Button>
        <Button
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center"
          color="purple"
        >
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
