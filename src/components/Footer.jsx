import React from "react";

import ContentWrapper from "./ContentWrapper";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-primary-black3 py-12 text-white relative">
      <ContentWrapper className="flex items-center flex-col ">
        <ul className="flex items-center justify-center gap-4 mb-5 md:mb-7 md:gap-7">
          <li className="transition-all ease duration-300 cursor-pointer text-sm hover:text-secondary-pink md:text-lg ">
            Terms Of Use
          </li>
          <li className="transition-all ease duration-300 cursor-pointer text-sm hover:text-secondary-pink md:text-lg">
            Privacy-Policy
          </li>
          <li className="transition-all ease duration-300 cursor-pointer text-sm hover:text-secondary-pink md:text-lg">
            About
          </li>
          <li className="transition-all ease duration-300 cursor-pointer text-sm hover:text-secondary-pink md:text-lg">
            Blog
          </li>
          <li className="transition-all ease duration-300 cursor-pointer text-sm hover:text-secondary-pink md:text-lg">
            FAQ
          </li>
        </ul>
        <div className="">
          {/* write a cool message for movie  lovers */}
          <p className="text-center shadow-sm  text-sm opacity-[0.8] mb-5 max-w[800px] md:text-lg md-6">
            &copy; {year} Developed by
            <span className=" font-black text-secondary-pink text-lg hover:text-xl">
              {" "}
              <a
                href="https://www.linkedin.com/in/ekunola-paul-42712b1aa"
                target="_blank"
              >
                Ekunola Paul{" "}
              </a>{" "}
            </span>
          </p>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
