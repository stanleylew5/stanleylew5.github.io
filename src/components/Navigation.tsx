"use client";
import Image from "next/image";
import { useState } from "react";
import prof from "../../public/prof.png";
import { navigation } from "@/data/navigation";
import { AlignJustify } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed z-50 flex w-screen items-center bg-white shadow-xl">
      <div className="flex flex-row">
        <ScrollLink
          to="aboutme"
          className="flex cursor-pointer items-center"
          smooth={true}
          duration={500}
        >
          <Image src={prof} alt="prof" className="ml-4 w-15 py-2 md:w-20" />
          <p className="ml-4 text-xl font-medium text-black hover:opacity-40 md:text-2xl lg:text-3xl">
            STANLEY LEW
          </p>
        </ScrollLink>
        <div onClick={handleNav}>
          <AlignJustify className="absolute top-7 right-4 text-3xl text-black hover:cursor-pointer hover:opacity-60 md:hidden" />
        </div>
      </div>
      <div className="absolute right-0 hidden text-center md:flex">
        {navigation.map(({ text, link }, index) => (
          <ScrollLink
            to={link}
            key={index}
            smooth={true}
            duration={500}
            className="group relative mr-10 cursor-pointer px-1 transition-all duration-1000 ease-in-out md:text-2xl lg:text-3xl"
          >
            {text}
            <span className="bg-stanley-gray-100 absolute -bottom-1 left-1/2 h-[3px] w-0 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
          </ScrollLink>
        ))}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ width: 0, right: 0 }}
            animate={{ width: "80vw" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border-stanley-gray-100 fixed top-0 right-0 z-10 flex h-screen flex-col border-b-1 bg-white md:hidden"
          >
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6, ease: "easeIn" }}
              className="text-stanley-black-100 flex w-[80vw] justify-end py-6 pr-4 text-3xl"
            >
              <IoCloseOutline onClick={handleNav} className="cursor-pointer" />
            </motion.div>
            <motion.div
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5, ease: "easeIn" }}
              className="border-stanley-gray-300 mx-4 border-b-1"
            />
            {navigation.map(({ text, link }, index) => (
              <div key={index}>
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: (index + 1) * 0.2 + 1.05,
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  className="py-4 pl-4"
                >
                  <ScrollLink
                    to={link}
                    onClick={handleNav}
                    smooth={true}
                    duration={500}
                  >
                    {text}
                  </ScrollLink>
                </motion.div>
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: (index + 1) * 0.2 + 1.2,
                    duration: 0.5,
                    ease: "easeIn",
                  }}
                  className="border-stanley-gray-300 mx-4 border-b-1"
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;
