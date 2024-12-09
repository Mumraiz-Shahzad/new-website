// pages/index.js
import React from 'react';
import Link from 'next/link'; // Ensure to import Link from Next.js

const Home = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="p-4 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <img
            src="/download%20(1).png" // Use <img> instead of <image> tag
            alt="Download"
            className="h-18 w-auto transform hover:rotate-180 transition duration-500 ease-in-out"
          />
          <nav className="flex bg-black hover:bg-white text-yellow-500 font-bold">
            <ul className="flex space-x-12 p-6">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    Men's
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    Women's
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    Kid's
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:underline hover:bg-white hover:text-black">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 text-yellow-500 bg-black">
        <div className="text-center max-w-lg">
          <h2 className="text-3xl font-bold mb-4 hover:bg-white hover:text-black">
            Welcome to Our Website
          </h2>
          <p className="mb-6">
            Discover high-quality fashion wear, services, and more. Let us
            guide you through a seamless experience as you explore what we
            offer.
          </p>
          <Link href="#" legacyBehavior>
            <a className="flex-grow hover:underline hover:bg-white hover:text-black font-semibold">
              Learn More
            </a>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-500 hover:bg-white hover:text-black mt-40 text-center px-12 py-4 font-bold">
        &copy; 2024 ORNI OUTFIT - All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
