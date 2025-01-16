import React from "react";

import ContentWrapper from "./ContentWrapper";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-primary-black3 py-12 text-white relative">
      <ContentWrapper className="flex items-center flex-col ">
        <div className="">
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
