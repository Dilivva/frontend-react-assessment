import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Image } from "../assets/index";


interface LayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#E87003] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link to="/">
          <h1 className="text-lg font-semibold">Delivva</h1>
        </Link>

        {/* Desktop Nav*/}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-300">
            Product
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
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

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#E87003] text-white py-2 px-4">
          <Link to="/" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/product" className="block py-2 hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Product
          </Link>
        </div>
      )}
    </header>
  );
};


const Footer = () => {

  return (
    <>
      <div className=" bg-[#F5F8FF] w-full px-5 py-10 md:px-10">
        <div className="">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div className="">
              <img src={Image.delivavLogo} alt="logo" width={50} className='' />
              <p className="text-[#000] text-[13.5px] font-normal mt-5 mb-12 lg:w-2/3 text-left leading-[28px]">{`Send24 provides fast and reliable interstate delivery, ensuring your packages arrive safely and on time for both business and personal needs. Get started now.`}</p>
              <div className="flex items-start justify-start mb-1 text-[14px] font-semibold text-[#000]">
                Follow Us on:
              </div>
              <div className="flex items-start mb-4 lg:gap-4 md:gap-4 sm:gap-4 flex-row lg:justify-start md:justify-start sm:justify-start">
                <a
                  className="rounded-[4px] w-6 h-6 bg-[#F5F8FF] bg-opacity-[20%] flex items-center justify-center"
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-xl hover:text-[#0077B5] transition duration-300" />

                </a>
                <a
                  className="rounded-[4px] w-6 h-6 bg-[#F5F8FF] bg-opacity-[20%] flex items-center justify-center"
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-xl hover:text-[#1DA1F2] transition duration-300" />

                </a>
                <a
                  className="rounded-[4px] w-6 h-6 bg-[#F5F8FF] bg-opacity-[20%] flex items-center justify-center"
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-xl hover:text-[#1DA1F2] transition duration-300" />

                </a>


              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 ">

              <nav className="grid-cols-1 text-[#FFFFFF] md:my-0 my-10">
                <h6 className="footer-title mb-6 font-bold text-left text-black lg:text-[14px] ">
                  RESOURCE
                </h6>
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → Our Products
                </a>
                <br />
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → FAQs
                </a>
                <br />
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → Blogs
                </a>
                <br />
              </nav>

              <nav className="grid-cols-1 text-[#FFFFFF]">
                <h6 className="footer-title mb-6 font-bold text-left text-black lg:text-[14px] ">
                  COMPANY
                </h6>
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → About Us
                </a>
                <br />
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → Contact Us
                </a>
                <br />
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → New Products
                </a>

              </nav>

              <nav className="grid-cols-1 text-[#FFFFFF]">
                <h6 className="footer-title mb-6 font-bold text-left text-black lg:text-[14px] ">
                  Legal
                </h6>
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → Terms of Service
                </a>
                <br />
                <a
                  href={""}
                  className="flex gap-1 link link-hover hover:text-[#F5F8FF] text-[#ABAEC0] lg:leading-[15px] text-sm"
                >
                  → Privacy Policy
                </a>
                <br />


              </nav>
            </div>
          </div>
        </div>


      </div>

      <footer className="bg-gray-800 text-white">
        <div className="flex items-center justify-center container mx-auto py-4 px-4 md:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Delivva. All rights reserved.</p>
          <img src={Image.delivavLogo} alt="delivva-logo" className="h-4 w-4 mx-2" />
        </div>
      </footer>
    </>
  );
};



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
