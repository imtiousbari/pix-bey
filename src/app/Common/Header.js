
"use client"
import { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-2 py-6">
      <nav className="flex items-center relative mx-auto" style={{ maxWidth: "1440px" }}>
        <div className="text-lg font-bold md:py-0 py-4">
          Logo
        </div>
        <ul className={`md:px-2 ml-auto md:flex md:space-x-2 md:relative top-full left-0 right-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/" passHref>
              <span className="font-sans flex md:inline-flex px-4 md:text-white items-center md:hover:border-b-2 md:border-white">
                <span>home</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services" passHref>
              <span className="font-sans flex md:inline-flex px-4 md:text-white items-center md:hover:border-b-2 md:border-white">
                <span>services</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/products" passHref>
              <span className="font-sans flex md:inline-flex px-4 md:text-white items-center md:hover:border-b-2 md:border-white">
                <span>Products</span>
              </span>
            </Link>
          </li>
          <li>
            <div className="font-sans flex justify-between md:inline-flex px-4 md:text-white items-center md:hover:border-b-2 md:border-white space-x-2 cursor-pointer" onClick={toggleMenu}>
              <span>about us</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg> */}
            </div>
            {/* <ul className="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ">
              <li>
                <Link href="/services/web-development" passHref>
                  <span className="flex px-4 py-3 hover:bg-gray-50">Web development</span>
                </Link>
              </li>
              <li>
                <Link href="/services/web-design" passHref>
                  <span className="flex px-4 py-3 hover:bg-gray-50">Web Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services/machine-learning" passHref>
                  <span className="flex px-4 py-3 hover:bg-gray-50">Machine Learning</span>
                </Link>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href="/about" passHref>
              <span className="font-sans flex md:inline-flex px-4 md:text-white items-center md:hover:border-b-2 md:border-white">
                <span>contact us</span>
              </span>
            </Link>
          </li>
        </ul>
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
        </div>
      </nav>
    </div>
  );
}

export default Header;
