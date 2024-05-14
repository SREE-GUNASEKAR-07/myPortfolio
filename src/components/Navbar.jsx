import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  const navlinks = [
    { link: "Home", path: "home" },
    { link: "Home", path: "home" },
  ];
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <img className=" mx-2 w-10" src={logo} alt="logo" />
      </div>
      {/* <ul>
          {navlinks.map(({ link, path }) => (
            <li>{link}</li>
          ))}
        </ul> */}
      <div className=" flex m-8 justify-center items-center gap-4 text-2xl">
        <FaLinkedin className="cursor-pointer" />
        <FaGithub className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaSquareXTwitter className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
