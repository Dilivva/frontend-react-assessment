import React from "react";
import { Image } from "../assets";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">

      <header className="bg-[#E87003] text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
          <h1 className="text-l font-semibold">Delivva</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/product" className="hover:text-gray-300">
              Product
            </a>

          </nav>
          <button className="md:hidden text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>


      <main className="flex-grow container mx-auto p-4 md:p-8">{children}</main>


      <footer className="bg-gray-800 text-white">
        <div className="flex items-center justify-center container mx-auto py-4 px-4 md:px-8 text-center">
          <p className="text-sm">&copy; 2025 Delivva. All rights reserved.</p>
          <img src={Image.delivavLogo} alt="delivva-logo" className="h-4 w-4 mx-2" />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
