import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <h1 className="text-4xl cursor-pointer">
          <a href="/">SG</a>
        </h1>
      </div>

      <div className=" flex m-8 justify-center items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sreeguna07/" target="blank">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/SREE-GUNASEKAR-07" target="blank">
          <FaGithub className="cursor-pointer" />
        </a>
        <a href="">
          <FaDownload className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
