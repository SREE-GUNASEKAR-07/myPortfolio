import React from "react";
import { motion } from "framer-motion";
import { DiJava, DiJavascript, DiMysql, DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRedux className="text-7xl text-violet-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJava className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(1.1)}
          animate="animate"
          initial="initail"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <GrMysql className="text-7xl text-blue-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
