"use client";
import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";
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

const Experiences = () => {
  return (
    <div className="mx-[10%] md:mx-[15%]" id="experiences">
      <motion.p
        variants={SlideInFromLeft}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="from-stanley-black-100 to-stanley-gray-100 size-max bg-gradient-to-r bg-clip-text pb-4 text-3xl font-semibold text-transparent md:text-5xl"
      >
        Experiences
      </motion.p>
      <div className="border-stanley-gray-300 border-b-1" />
      {experiences.map(
        ({ photo, company, position, dates, city, contributions }, index) => (
          <motion.div
            variants={Down}
            viewport={{ once: true, amount: 0.25 }}
            initial="initial"
            whileInView="animate"
            custom={index === 0 ? 0 : 0.1}
            key={index}
          >
            <ExperienceCard
              photo={photo}
              company={company}
              position={position}
              dates={dates}
              city={city}
              contributions={contributions}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default Experiences;
