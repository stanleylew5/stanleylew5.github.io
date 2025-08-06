"use client";
import Image from "next/image";
import casual from "@/public/casual.png";
import online from "@/public/online.svg";
import socials from "@/data/socials";
import Link from "next/link";
import { motion } from "motion/react";

const SlideInFromLeft = {
  initial: { opacity: 0, x: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Pebble = {
  initial: { opacity: 0, x: -10, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const AboutMe = () => {
  return (
    <div
      className="relative flex min-h-screen items-center overflow-hidden pt-[10vh] md:h-auto md:pt-[8%] 2xl:pt-[5%]"
      id="aboutme"
    >
      <div className="absolute -right-[20%] z-0 rounded-full bg-orange-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[20%] -left-[20%] z-0 rounded-full bg-red-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[40%] z-0 rounded-full bg-red-200/30 blur-3xl lg:right-0 lg:h-[400px] lg:w-[400px] 2xl:-top-[20%] 2xl:-right-[10%] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[20%] right-[20%] z-0 rounded-full bg-purple-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[10%] -left-[10%] z-0 rounded-full bg-purple-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[20%] left-[10%] z-0 rounded-full bg-orange-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute -top-[20%] left-[30%] z-0 rounded-full bg-red-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[60%] -left-[10%] z-0 rounded-full bg-orange-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[60%] -right-[10%] z-0 rounded-full bg-purple-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[80%] right-[10%] z-0 rounded-full bg-orange-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[80%] right-[30%] z-0 rounded-full bg-purple-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[80%] right-[45%] z-0 rounded-full bg-orange-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />
      <div className="absolute top-[80%] right-[65%] z-0 rounded-full bg-red-200/30 blur-3xl lg:h-[400px] lg:w-[400px] 2xl:h-[500px] 2xl:w-[500px]" />

      <div className="z-10 mx-[10%] grid grid-cols-1 py-[5%] md:mx-[15%] md:grid-cols-4">
        <div className="relative size-fit">
          <Image src={casual} alt="casual" className="w-[90vw] md:w-[15vw]" />
          <Image
            src={online}
            alt="online"
            className="absolute right-6 bottom-0 w-[20vw] grow md:right-0 md:w-[5vw]"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-8 md:col-span-3 md:items-start md:pt-0">
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0}
            className="from-stanley-black-100 to-stanley-gray-100 bg-gradient-to-r bg-clip-text pb-4 text-4xl font-semibold text-transparent md:text-7xl"
          >
            Stanley Lew
          </motion.p>
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.25}
            className="text-stanley-gray-200 pb-4 text-xl md:text-3xl"
          >
            Student, Software Engineer
          </motion.p>
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.5}
            className="text-stanley-gray-200 text-md pb-4 text-center md:text-left md:text-lg"
          >
            Hello! I&apos;m Stanley Lew, a third year at the University of
            California, Riverside. Currently, I am pursuing a BS in Computer
            Science.
          </motion.p>
          <div className="flex gap-4 pt-4 text-4xl md:pt-0">
            {socials.map(({ Icon, link }, index) => (
              <motion.div
                variants={Pebble}
                viewport={{ once: true, amount: 0 }}
                initial="initial"
                whileInView={"animate"}
                custom={(index % 5) * 0.2 + 1}
                key={index}
                id="experiences"
              >
                <Link
                  href={link}
                  className="hover:opacity-60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
