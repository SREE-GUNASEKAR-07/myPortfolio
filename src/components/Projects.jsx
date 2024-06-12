import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className=" my-20 text-center text-4xl"
      >
        Recent <span className=" text-neutral-500">Works</span>
      </motion.h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5 }}
              className=" w-full lg:w-1/4"
            >
              <a href={projects.links} target={projects.target}>
                <img
                  src={projects.image}
                  width={150}
                  height={150}
                  alt={projects.title}
                  className="mb-6 rounded cursor-pointer"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-neutral-400">{projects.description}</p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
