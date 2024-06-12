import React from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import resume from "../assets/GUNA.pdf";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className=" flex flex-shrink-0 items-center">
        <h1 className="text-4xl cursor-pointer">
          <a href="/">SG</a>
        </h1>
      </div>

      <div className=" flex m-8 justify-center items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sreeguna07/" target="_blank">
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a href="https://github.com/SREE-GUNASEKAR-07" target="_blank">
          <FaGithub className="cursor-pointer" />
        </a>
        <a
          href="mailto:gunasubramani2001@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
          target="_blank"
        >
          <FiMail className="cursor-pointer" />
        </a>
        <motion.a
          whileHover={{ scale: 1.1, originY: 5 }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          href={resume}
          download="SREE GUNASEKAR RESUME"
        >
          <FaDownload className="cursor-pointer" />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
