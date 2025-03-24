"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import prof from "../../public/prof.png";
import { navigation } from "@/data/navigation";
import { AlignJustify } from "lucide-react";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky flex items-center shadow-xl">
      <div className="flex flex-row">
        <Link href="/" className="flex items-center">
          <Image src={prof} alt="prof" className="ml-4 w-15 py-2 md:w-20" />
          <p className="ml-4 text-xl font-medium text-black hover:opacity-40 md:text-3xl">
            STANLEY LEW
          </p>
          <div onClick={handleNav}>
            <AlignJustify className="absolute top-7 right-4 text-3xl text-black hover:cursor-pointer hover:opacity-60 md:hidden" />
          </div>
        </Link>
      </div>
      <div className="absolute right-0 hidden text-center md:flex">
        {navigation.map(({ text, link }, index) => (
          <Link
            href={link}
            key={index}
            className="mr-10 text-3xl hover:opacity-40"
          >
            {text}
          </Link>
        ))}
      </div>
      {nav && (
        <div className="border-stanley-black-100 fixed top-18 -z-10 flex w-screen flex-col items-center border-b-1 bg-white md:hidden">
          {navigation.map(({ text, link }, index) => (
            <Link href={link} key={index} onClick={handleNav} className="">
              {text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
