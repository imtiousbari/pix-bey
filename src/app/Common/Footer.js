function Footer() {
  return (
    // <div>Footer</div>
    <footer className="bg-primary-blue bg-opacity-70 text-white py-10">
      <div className="mx-auto px-4 flex flex-col md:flex-row w-[1440px]  justify-between">
        {/* 1st */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">pixbey</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-900">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.54 6.42a8.67 8.67 0 0 1-2.56.7 4.49 4.49 0 0 0 1.94-2.48 8.85 8.85 0 0 1-2.83 1.08 4.42 4.42 0 0 0-7.57 3.02c0 .35.04.7.12 1.03a12.54 12.54 0 0 1-9.1-4.67 4.42 4.42 0 0 0 1.37 5.9 4.41 4.41 0 0 1-2-.55v.06c0 2.18 1.55 4 3.61 4.42a4.41 4.41 0 0 1-2 .08c.56 1.76 2.18 3.04 4.1 3.07a8.89 8.89 0 0 1-6.53 1.84A12.56 12.56 0 0 0 7.34 20c8.16 0 12.62-6.81 12.62-12.71 0-.2 0-.41-.01-.61a9.02 9.02 0 0 0 2.24-2.26l-.01-.01z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 7.22v9.56c0 2.64-2.14 4.78-4.78 4.78H6.78C4.14 21.56 2 19.42 2 16.78V7.22C2 4.58 4.14 2.44 6.78 2.44h10.44C19.86 2.44 22 4.58 22 7.22zm-10 10.78h-2V10h2v8zm-1-9.38c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2c0 .66-.54 1.2-1.2 1.2zm8 9.38h-2v-4c0-.88-.72-1.6-1.6-1.6-.88 0-1.6.72-1.6 1.6v4h-2v-8h2v1.08c.56-.84 1.52-1.36 2.6-1.36 1.66 0 3 1.34 3 3v5.28z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 5.27c-.81.36-1.68.61-2.59.72a4.49 4.49 0 0 0 1.97-2.47 8.93 8.93 0 0 1-2.83 1.08 4.44 4.44 0 0 0-7.56 3.03 4.47 4.47 0 0 0 .11 1.03A12.62 12.62 0 0 1 2 4.89a4.44 4.44 0 0 0 1.37 5.9 4.41 4.41 0 0 1-2-.55v.06a4.43 4.43 0 0 0 3.54 4.35 4.44 4.44 0 0 1-2 .08 4.44 4.44 0 0 0 4.15 3.07A8.88 8.88 0 0 1 2 18.58a12.53 12.53 0 0 0 6.79 1.98c8.13 0 12.57-6.73 12.57-12.57 0-.2 0-.4-.01-.6a8.94 8.94 0 0 0 2.24-2.27l-.02-.01z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.51 0-10 4.49-10 10 0 4.42 2.88 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.84.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.57 9.57 0 0 1 2.5-.34c.85.01 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.56 4.94.36.31.68.93.68 1.87v2.77c0 .28.16.59.67.49A10.01 10.01 0 0 0 22 12.04c0-5.51-4.49-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Download
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                How it Works
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Reporting
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">+880 12345678</p>
          <p className="mb-2">youremail@gmail.com</p>
          <p>Rangpur City</p>
        </div>
      </div>
      <div className="text-center mt-6 flex justify-between w-[1440px] mx-auto px-4">
        <p className="text-sm text-white">
          &copy; Copyright & Design by @md riad islam
        </p>
        <div className="mt-2">
          <a href="#" className="text-sm text-white hover:underline">
            Terms of use
          </a>
          <span className="mx-2">|</span>
          <a href="#" className="text-sm text-white hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
