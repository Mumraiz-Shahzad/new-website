import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="p-4 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <img
            src="/download%20(1).png"
            alt="Download"
            className="h-18 w-auto transform hover:rotate-180 transition duration-500 ease-in-out"
          />
          <nav className="flex bg-black text-yellow-500 font-bold p-6">
            <ul className="flex space-x-12">
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
      <main className="container mx-auto mt-6 p-4 bg-black text-yellow-500 shadow-md rounded-md">
        <h2 className="text-4xl font-semibold mb-4 hover:bg-white hover:text-black">
          About Us
        </h2>
        <p className="text-lg leading-relaxed mb-8">
          We are a team of dedicated professionals who aim to provide
          exceptional service and high-quality products. Our focus is on
          customer satisfaction and long-term relationships.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="px-6 py-2 bg-white text-yellow-500 font-semibold rounded hover:bg-black hover:text-white transition duration-200 ease-in-out">
            Get in Touch
          </a>
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-500 hover:bg-white hover:text-black mt-30 text-center px-12 py-4 font-bold">
        &copy; 2024 ORNI OUTFIT - All Rights Reserved
      </footer>
    </div>
  );
}
    