import Image from "next/image";
import casual from "../../public/casual.png";
import online from "../../public/online.svg";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div
      className="mx-[10%] flex h-screen items-center pt-[15%] md:mx-[15%] md:size-auto md:pt-[8%] 2xl:pt-[5%]"
      id="aboutme"
    >
      <div className="grid grid-cols-1 py-[5%] md:grid-cols-4">
        <div className="relative size-fit">
          <Image src={casual} alt="casual" className="w-[70vw] md:w-[15vw]" />
          <Image
            src={online}
            alt="online"
            className="absolute right-0 bottom-0 w-18"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-8 md:col-span-3 md:items-start md:pt-0">
          <p className="from-stanley-black-100 to-stanley-gray-100 bg-gradient-to-r bg-clip-text pb-4 text-4xl font-semibold text-transparent md:text-7xl">
            Stanley Lew
          </p>
          <p className="text-stanley-gray-200 pb-4 text-xl md:text-3xl">
            Student, Software Engineer
          </p>
          <p className="text-stanley-gray-200 text-md pb-4 text-center md:text-left md:text-lg">
            Hello! I&apos;m Stanley Lew, a second year CS at the University of
            California, Riverside. Currently, I am pursuing a BS in Computer
            Science and a minor in Informational Systems.
          </p>
          <div className="flex gap-4 pt-4 text-4xl md:pt-0">
            <Link
              href="https://www.instagram.com/stanleylew5/"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href="https://github.com/stanleylew5"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/stanleylew5/"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/resume.pdf"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoIosDocument />
            </Link>

            <Link
              href="mailto:stanley43595@gmail.com"
              className="hover:-translate-y-0.5 hover:opacity-60"
              target="_blank"
              rel="referrer"
            >
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
