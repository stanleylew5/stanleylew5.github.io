"use client";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import * as motion from "motion/react-client";

const SlideInFromLeft = {
  initial: { opacity: 0, x: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Down = {
  initial: { opacity: 0, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: custom, ease: "backInOut" },
  }),
};

const Projects = () => {
  return (
    <div className="mx-[10%] py-[5%] md:mx-[15%]" id="projects">
      <motion.p
        variants={SlideInFromLeft}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="from-stanley-black-100 to-stanley-gray-100 size-max bg-gradient-to-r bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-5xl"
      >
        Projects
      </motion.p>
      <div className="border-stanley-gray-300 border-b-1" />
      {projects.map(
        ({ image, name, description, icons, github, website }, index) => (
          <motion.div
            variants={Down}
            viewport={{ once: true, amount: 0.25 }}
            initial="initial"
            whileInView="animate"
            custom={index === 0 ? 0 : 0.1}
            key={index}
          >
            <ProjectCard
              image={image}
              name={name}
              description={description}
              icons={icons}
              github={github}
              website={website}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default Projects;
