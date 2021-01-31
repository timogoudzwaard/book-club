import { useState } from 'react';
import Button from '../../atoms/button/button';
import MobileMenu from '../mobile-menu/mobile-menu';
import classNames from 'classnames';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const svgOpenClasses = classNames('h-8 w-8', { hidden: mobileMenu });
  const svgCloseClasses = classNames('h-8 w-8', { hidden: !mobileMenu });

  return (
    <header className="p-4 mb-4 bg-white container border-b-2 mx-auto ">
      <nav className="flex flex-wrap justify-between">
        <a href="/">
          <img
            className="mb-2 h-10 w-10 mx-auto md:m-0 transition transform hover:scale-110"
            src="/svg/icon-message.svg"
            alt="chat icon"
          />
        </a>

        <button
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
          className="md:hidden bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <svg
            className={svgOpenClasses}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <svg
            className={svgCloseClasses}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="self-center space-x-10 hidden md:block">
          <Button href="/about" variant="borderless">
            About
          </Button>
          <Button href="/about" variant="borderless">
            Pricing
          </Button>
        </div>

        <div className="hidden md:block">
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

        <MobileMenu isEnabled={mobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
